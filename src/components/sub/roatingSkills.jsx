import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SkillTagCloud = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scn, cam, rndr, grp, ldr, sps;

    const initializeScene = () => {
      scn = new THREE.Scene();
      cam = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      rndr = new THREE.WebGLRenderer({ antialias: true });
      grp = new THREE.Group();
      ldr = new THREE.TextureLoader();
      sps = [];

      const icons = [
        "bootstrap",
        "chrome",
        "css",
        "express",
        "figma",
        "git",
        "github",
        "html",
        "javascript",
        "docker",
        "c",
        "mongo",
        "cpp",
        "nodejs",
        "ubuntu",
        "photoshop",
        "python",
        "react",
        "vim",
        "sass",
        "sql",

        "vscode",
      ].map((i) => `/asset/${i}.svg`);

      const r = 27; // Radius of the sphere
      const s = 6; // Sprite size

      rndr.setClearColor(0x000000, 0);
      rndr.setSize(420, 420);

      // Clear container to prevent multiple canvases
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // Clear existing canvas
        containerRef.current.appendChild(rndr.domElement);
      }
      const ambientLight = new THREE.AmbientLight(0xff0d0a, 1);
      scn.add(ambientLight);
      // Load icons and position them
      icons.forEach((p, i) =>
        ldr.load(p, (t) => {
          const phi = Math.acos(-1 + (2 * i) / icons.length);
          const theta = Math.sqrt(icons.length * Math.PI) * phi;
          const sp = new THREE.Sprite(
            new THREE.SpriteMaterial({
              map: t,
              transparent: true,
            })
          );
          sp.scale.set(s, s, 1);
          sp.position.set(
            r * Math.cos(theta) * Math.sin(phi),
            r * Math.sin(theta) * Math.sin(phi),
            r * Math.cos(phi)
          );
          grp.add(sp);
          sps.push(sp);
        })
      );

      scn.add(grp);
      cam.position.z = 50;

      const ry = new THREE.Raycaster();
      let canvasRect = rndr.domElement.getBoundingClientRect();

      const updateCanvasRect = () => {
        canvasRect = rndr.domElement.getBoundingClientRect();
      };

      window.addEventListener("scroll", updateCanvasRect);
      window.addEventListener("resize", updateCanvasRect);

      window.addEventListener("click", (e) => {
        if (
          e.clientX >= canvasRect.left &&
          e.clientX <= canvasRect.right &&
          e.clientY >= canvasRect.top &&
          e.clientY <= canvasRect.bottom
        ) {
          ry.setFromCamera(
            {
              x: (2 * (e.clientX - canvasRect.left)) / 375 - 1,
              y: (2 * -(e.clientY - canvasRect.top)) / 375 + 1,
            },
            cam
          );
          const it = ry.intersectObjects(sps)[0];
          it && grp.attach(it.object);
        }
      });

      let mx = 0,
        my = 0;

      window.addEventListener("mousemove", (e) => {
        if (
          e.clientX >= canvasRect.left &&
          e.clientX <= canvasRect.right &&
          e.clientY >= canvasRect.top &&
          e.clientY <= canvasRect.bottom
        ) {
          mx = (0.01 * (e.clientX - canvasRect.left)) / 375 - 1;
          my = (2 * -(e.clientY - canvasRect.top)) / 375 + 1;
        }
      });

      const animate = () => {
        requestAnimationFrame(animate);
        grp.rotation.y += 0.005 + mx * 0.02;
        grp.rotation.x += my * 0.02;
        grp.children.forEach((s) => s.lookAt(cam.position));
        rndr.render(scn, cam);
      };

      animate();
    };

    initializeScene();

    return () => {
      // Cleanup Three.js resources
      window.removeEventListener("scroll", () => {});
      window.removeEventListener("resize", () => {});
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("click", () => {});
      grp.clear(); // Clear group children
      rndr.dispose(); // Dispose renderer
      if (containerRef.current) containerRef.current.innerHTML = ""; // Clear canvas
    };
  }, []); // Run once when the component mounts

  return (
    <section
      id="section1"
      style={{
        position: "absolute",
        top: "40px",
      }}
    >
      <div
        ref={containerRef}
        style={{
          height: "355px",
          aspectRatio: "1",
          background: "none",
          margin: "0 auto",
        }}
        className="skill-tag-cloud"
      ></div>
    </section>
  );
};

export default SkillTagCloud;
