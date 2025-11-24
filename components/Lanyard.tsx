'use client'

import { useEffect, useState } from 'react'
import { Music, Smartphone, Monitor } from 'lucide-react'

interface DiscordUser {
    id: string
    username: string
    avatar: string
    discriminator: string
    global_name?: string
}

interface SpotifyData {
    song: string
    artist: string
    album: string
    album_art_url: string
    track_id: string
}

interface LanyardData {
    discord_user: DiscordUser
    discord_status: 'online' | 'idle' | 'dnd' | 'offline'
    active_on_discord_desktop?: boolean
    active_on_discord_mobile?: boolean
    listening_to_spotify?: boolean
    spotify?: SpotifyData
}

interface LanyardResponse {
    success: boolean
    data: LanyardData
}

const statusColors = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-400'
}

const statusLabels = {
    online: 'Online',
    idle: 'Idle',
    dnd: 'Do Not Disturb',
    offline: 'Offline'
}

export default function Lanyard({ userId }: { userId: string }) {
    const [data, setData] = useState<LanyardData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`)
                const json: LanyardResponse = await response.json()
                if (json.success) {
                    setData(json.data)
                }
            } catch (error) {
                console.error('Failed to fetch Discord status:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchStatus()
        const interval = setInterval(fetchStatus, 30000)
        return () => clearInterval(interval)
    }, [userId])

    if (loading) {
        return (
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-3xl animate-pulse">
                <div className="h-20 bg-gray-200 rounded-2xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
        )
    }

    if (!data) {
        return (
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-3xl">
                <p className="text-gray-500">Unable to load Discord status</p>
                <p className="text-sm text-gray-400 mt-2">Please check your Discord User ID</p>
            </div>
        )
    }

    const { discord_user, discord_status, active_on_discord_desktop, active_on_discord_mobile, listening_to_spotify, spotify } = data

    return (
        <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl hover:border-gray-900 transition-colors space-y-6">
            {/* Discord User Info */}
            <div className="flex items-center gap-4">
                <div className="relative">
                    <img
                        src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=128`}
                        alt={discord_user.username}
                        className="w-20 h-20 rounded-full ring-2 ring-gray-200"
                    />
                    <div className={`absolute bottom-0 right-0 w-6 h-6 ${statusColors[discord_status]} border-4 border-white rounded-full`} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-gray-900">
                        {discord_user.global_name || discord_user.username}
                    </h4>
                    <p className="text-gray-600">
                        {statusLabels[discord_status]}
                    </p>
                </div>
            </div>

            {/* Active Platforms */}
            {(active_on_discord_desktop || active_on_discord_mobile) && (
                <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-600">Active on:</span>
                    {active_on_discord_desktop && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                            <Monitor size={14} />
                            <span>Desktop</span>
                        </div>
                    )}
                    {active_on_discord_mobile && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                            <Smartphone size={14} />
                            <span>Mobile</span>
                        </div>
                    )}
                </div>
            )}

            {/* Spotify Status */}
            {listening_to_spotify && spotify && (
                <div className="bg-gradient-to-br from-green-400 to-green-600 p-5 rounded-2xl text-white">
                    <div className="flex items-center gap-2 mb-4">
                        <Music size={18} />
                        <span className="text-sm font-semibold">Listening to Spotify</span>
                    </div>
                    <div className="flex gap-4">
                        <img
                            src={spotify.album_art_url}
                            alt={spotify.album}
                            className="w-16 h-16 rounded-lg shadow-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="font-bold truncate">{spotify.song}</p>
                            <p className="text-sm text-green-100 truncate">{spotify.artist}</p>
                        </div>
                    </div>
                </div>
            )}

            {!listening_to_spotify && discord_status === 'online' && (
                <p className="text-sm text-gray-500">Currently available</p>
            )}
        </div>
    )
}
