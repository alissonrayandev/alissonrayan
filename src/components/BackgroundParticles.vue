<template>
  <div id="particles-js"></div>
</template>

<script>
import 'particles.js';

export default {
  name: 'BackgroundParticles',
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    this.initParticles();
  },
  watch: {
    isDarkMode() {
      this.initParticles();
    }
  },
  methods: {
    initParticles() {
      const particlesColor = this.isDarkMode ? '#ffffff' : '#cccccc';

      const particlesConfigDarkMode = {
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: particlesColor
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: particlesColor,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble'
            },
            onclick: {
              enable: true,
              mode: 'repulse'
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
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3
            },
            repulse: {
              distance: 400,
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
      };

      const particlesConfigLightMode = {
        particles: {
          number: {
            value: 6,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: particlesColor
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 0,
              color: '#000'
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 160,
            random: false,
            anim: {
              enable: true,
              speed: 10,
              size_min: 40,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 200,
            color: '#ffffff',
            opacity: 1,
            width: 2
          },
          move: {
            enable: true,
            speed: 8,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'grab'
            },
            onclick: {
              enable: false,
              mode: 'push'
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
      };

      const config = this.isDarkMode ? particlesConfigDarkMode : particlesConfigLightMode;

      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }

      window.particlesJS('particles-js', config);
    }
  }
};
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
