-- Reset database tables
-- Run this in Supabase SQL Editor if you need to reset the database

DROP TABLE IF EXISTS "Contact" CASCADE;
DROP TABLE IF EXISTS "Post" CASCADE;
DROP TABLE IF EXISTS "Project" CASCADE;
DROP TABLE IF EXISTS "Skill" CASCADE;
DROP TABLE IF EXISTS "User" CASCADE;
DROP TABLE IF EXISTS "_prisma_migrations" CASCADE;
