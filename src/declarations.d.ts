import { Object3DNode, MaterialNode } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

declare module '@react-three/fiber' {
    interface ThreeElements {
        meshLineGeometry: any;
        meshLineMaterial: any;
    }
}
