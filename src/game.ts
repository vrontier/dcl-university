/////////////////////////////////////
// Building in Decentraland course
// Cryptovrontier's fixed lesson 9 scene
// 

// Importing spawn functions and Carl's head-up display
import {spawnPlaneX, spawnBoxX, spawnGltfX} from './modules/spawnerFunctions'

// Create base entity for fixed scene
let fixedScene: Entity = new Entity()
fixedScene.addComponent(new Transform({
    position: new Vector3(15,2,15)
}))

// Create ground
let ground: Entity = spawnPlaneX (
    8,0,8,
    90,0,0,
    16,16,1)
let groundMaterial: Material = new Material()
groundMaterial.albedoColor = new Color3(0.1, 0.4, 0)
groundMaterial.metallic = 0
ground.addComponentOrReplace(groundMaterial)

// Create box
let box: Entity = spawnBoxX(
    8,0.5,8,
    0,0,0,
    1,1,1)
let boxMaterial: Material = new Material()
boxMaterial.albedoColor = new Color3(0,0,0)
boxMaterial.metallic = 1
boxMaterial.roughness = 0
box.addComponent(boxMaterial)

// Create cube
let cube: Entity = spawnGltfX(
    new GLTFShape("models/Lesson9Cube_fixed/Lesson9Cube_fixed.glb"),
    8,1.5,8,
    90,45,45,
    0.3,0.3,0.3)

// Create trees
let tree_1: Entity = spawnGltfX(
    new GLTFShape("models/NaturePack_fixed/tree_1.glb"),
    5,0,5,
    0,0,0,
    0.25,0.25,0.25)
let tree_2: Entity = spawnGltfX(
    new GLTFShape("models/NaturePack_fixed/tree_2.glb"),
    6.5,0,6.5,
    0,70,0,
    0.25,0.25,0.25)
let tree_3: Entity = spawnGltfX(
    new GLTFShape("models/NaturePack_fixed/tree_3.glb"),
    8,0,5,
    0,270,0,
    0.25,0.25,0.25)
let tree_4: Entity = spawnGltfX(
    new GLTFShape("models/NaturePack_fixed/tree_1.glb"),
    9.5,0,4.5,
    0,120,0,
    0.25,0.25,0.25)
let tree_5: Entity = spawnGltfX(
    new GLTFShape("models/NaturePack_fixed/tree_2.glb"),
    4,0,4.5,
    0,35,0,
    0.25,0.25,0.25)
let firTree_1: Entity = spawnGltfX(
    new GLTFShape("models/TreeA_Fir_Fixed/single_files/TreeA_Optimised_28_June_2018_A01.babylon.gltf"),
    10,0,10,
    0,0,0,
    .1,.1,.1)
let firTree_2: Entity = spawnGltfX(
    new GLTFShape("models/TreeA_Fir_Fixed/TreeA_Fir_fixed.glb"),
    4,0,10,
    0,0,0,
    .1,.1,.1)

// Create trees
let bush_1: Entity = spawnGltfX(
    new GLTFShape("models/NaturePack_fixed/bush_1.glb"),
    4,0,3,
    0,0,0,
    0.25,0.25,0.25)
let bush_2: Entity = spawnGltfX(
    new GLTFShape("models/NaturePack_fixed/bush_2.glb"),
    2,0,4,
    0,70,0,
    0.25,0.25,0.25)

// Create bird
let bird: Entity = spawnGltfX(
    new GLTFShape("models/Sparrow/Sparrow-burung-pipit.gltf"),
    8,2.05,8,
    0,0,0,
    0.05, 0.05, 0.05)

// Create scene soundtrack
let sceneSoundtrackFile: AudioClip = new AudioClip('sounds/Chasing_Dreams_-_The_Endless_Tale_of_Angels_and_Stars.mp3')
let sceneSoundtrackAudio: AudioSource = new AudioSource(sceneSoundtrackFile)
fixedScene.addComponent(sceneSoundtrackAudio)
sceneSoundtrackAudio.playing = true
sceneSoundtrackAudio.loop = true

engine.addEntity(fixedScene)


