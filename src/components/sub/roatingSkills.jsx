import { Expand } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const SkillTagCloud = ({ className, percam, setIsOpenSkills }) => {
  const containerRef = useRef(null);
  const [variable, setVariable] = useState(75); // Default value can be anything

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setVariable(95);
  //     } else {
  //       setVariable(75); // Reset value if needed for larger screens
  //     }
  //   };

  //   // Set the value initially when the component mounts
  //   handleResize();

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup the event listener on component unmount
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  useEffect(() => {
    let scn, cam, rndr, grp, ldr, sps;

    const initializeScene = () => {
      scn = new THREE.Scene();
      cam = new THREE.PerspectiveCamera(percam, 1, 0.1, 1000);
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

      // window.addEventListener("click", (e) => {
      //   if (
      //     e.clientX >= canvasRect.left &&
      //     e.clientX <= canvasRect.right &&
      //     e.clientY >= canvasRect.top &&
      //     e.clientY <= canvasRect.bottom
      //   ) {
      //     ry.setFromCamera(
      //       {
      //         x: (2 * (e.clientX - canvasRect.left)) / 375 - 1,
      //         y: (2 * -(e.clientY - canvasRect.top)) / 375 + 1,
      //       },
      //       cam
      //     );
      //     const it = ry.intersectObjects(sps)[0];
      //     it && grp.attach(it.object);
      //   }
      // });

      let mx = 0,
        my = 0;

      // window.addEventListener("mousemove", (e) => {
      //   if (
      //     e.clientX >= canvasRect.left &&
      //     e.clientX <= canvasRect.right &&
      //     e.clientY >= canvasRect.top &&
      //     e.clientY <= canvasRect.bottom
      //   ) {
      //     mx = (0.01 * (e.clientX - canvasRect.left)) / 375 - 1;
      //     my = (2 * -(e.clientY - canvasRect.top)) / 375 + 1;
      //   }
      // });

      const animate = () => {
        requestAnimationFrame(animate);
        grp.rotation.y += 0.001 + mx * 0.002;
        grp.rotation.x += my * 0.002;
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
      onClick={()=>{setIsOpenSkills(true)}}
      className={className}
      style={{
        position: "absolute",
        top: "40px",
        outline: "1px solid",
        height: "480px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      <div className="skill-expand" style={{
        display:"flex",
        alignItems:"center",
        // outline:"1px solid red",
        marginTop:"8px",
        padding:"10px",
        justifyContent:"space-around"
      }}>
      <h2
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 know-more-skill"
        style={{
          // margin: "10px 0 0 20px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Know more about my Skills{" "}
      </h2>{" "}
      {/* <Expand scale={50} /> */}
      <Expand size={20} />
      </div>
      <div
        ref={containerRef}
        style={{
          height: "450px",
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
