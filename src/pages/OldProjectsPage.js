// import { motion } from "framer-motion";

// screenshots
import _2dgame from '../assets/2dgame.png';
import turretgame from '../assets/turretgame.png';
import cooltilerendering from '../assets/cooltilerendering.png';
import unitySpells from '../assets/unityspells.png';
import _2dphysics from '../assets/2dphysics.png';

// videos
import arbitraryAabbCollision from '../assets/arbitrary aabb collision.mp4';
import erosion from '../assets/erosion.mp4';
import _3dengine from '../assets/3dengine.mp4';

import { GalleryItem } from "../components/GalleryItem";

export function OldProjectsPage() {
  return (
    <div>
      <h1>Some old projects</h1>
      <p>Some of my personal projects. A lot of them are custom engine 2D games, some are in HTML5 and JavaScript.</p>

      <h2>More</h2>
      <ul>
        <li><a href={_3dengine} target='_blank'>3D OpenGL FPS</a></li>
        <li><a href={arbitraryAabbCollision} target='_blank'>Arbitrary AABB collision in 2D</a></li>
        <li><a href={erosion} target='_blank'>Dungeon generation + erosion</a></li>
      </ul>

      <GalleryItem
        title="Another 2D engine"
        paragraphs={[
          "Not really a game, this project just represents my ongoing exploration into game engine programming.",
          "It's really an excuse for me to implement things like sprite batching, debug drawing, text rendering, audio, resource management. etc. and is a 'jumping off point' for my future 2D projects.",
          "Uses SDL2 and OpenGL/GLAD for rendering and OpenAL Soft with libsndfile for audio. I also tried integrating Box2D and IMGui in this project."
        ]}
        image={_2dgame}
      />
      <GalleryItem
        title="Vampire Survivors inspired space engineer game"
        paragraphs={[
          "A vampire survivors inspired endless shooter, where you play an engineer that can build and repair turrets. The idea was that the turrets take a much greater role in offense, and the player takes more of a 'healer' role.",
          "I hope to come back to this at some point using an updated version of my engine."
        ]}
        image={turretgame}
      />
      <GalleryItem
        title="Unfinished kind of rogue like game"
        paragraphs={[
          "Although I didn't get far with this project I was quite proud of the 'lighting'.",
          "I wanted the wall tiles to have a soft shadow around them, and I came up with the idea of rendering out a texture with a black pixel for each wall tile. Then I stretched this texture by the size of the tiles and let bilinear filtering do the blur effect for me.",
          "The per-tile lighting was done with a djikstra algorithm to find out how far each tile is away from a lightsource, and change their brightness accordingly.",
          "This project also featured some very basic map generation. I generated rooms with a kind of recursive partitioning, then attempted to carve corridors between them. Overall the maps turned out pretty bad, but the idea was kinda cool!"
        ]}
        image={cooltilerendering}
      />
      <GalleryItem
        title="2D GJK and physics"
        paragraphs={[
          "Although the image for this isn't very interesting, the algorithm is really cool. I followed along with Casey Muratori's talk on the GJK algorithm and implemented it as he described. This provided me with a way to generate collision points and a collision normal between any pair of convex shapes that I can write a support function for.",
          "For the actual physics simulation, I followed Ming-Lun Chou's talks on physics constraints in games. This led me to implement a contact constraint solver for a really nice looking physics simulation.",
          "In the future I'd like to revisit this, because I don't think I really explored it fully, and I left the code very unfinished.",
        ]}
        image={_2dphysics}
      />
      <GalleryItem
        title="Unity endless wizard game"
        paragraphs={[
          "A really old project but it looks quite nice :)",
          "Built over a weekend to try and learn Unity.",
          "I didn't like Unity all that much, but everyone was using it so I thought I should get some experience with it. It was still an enjoyable experience and the 'game' looks pretty cool."
        ]}
        image={unitySpells}
      />
    </div>
  );
}
