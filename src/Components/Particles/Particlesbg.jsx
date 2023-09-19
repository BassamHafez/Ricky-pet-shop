import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import styles from './Particlesbg.module.css'
// import { loadSlim } from "tsparticles-slim";

const Particlesbg = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className={styles.particleBackground}
      options={{
        background: {
          color: {
            value: "#BCF2F5",
          },
        },
        fpsLimit: 120,
        particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 500
              }
            },
            color: {
              value: "#1b1e34"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#5D1A9F"
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 70,
              random: false,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "grab"
              },
              onclick: {
                enable: false,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
      }}
    />
  );
};

export default Particlesbg;
