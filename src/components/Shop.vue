<template>
  <div id="shop">
    <section class="section section-shop">
      <div class="row">
        <div class="container">
          <div class="section-shop__grid">
            <div>
              <div class="glide">
                <div class="glide__track" data-glide-el="track">
                  <div class="glide__slides">
                    <img
                      loading="lazy"
                      class="glide__slide"
                      v-for="taste in activeTastes"
                      :src="taste"
                      alt=""
                    />
                  </div>
                </div>
                <div class="glide__bullets" data-glide-el="controls[nav]">
                  <div class="glide__bullet" data-glide-dir="=0"></div>
                  <div class="glide__bullet" data-glide-dir="=1"></div>
                  <div class="glide__bullet" data-glide-dir="=2"></div>
                </div>
                <div class="controls" data-glide-el="controls">
                  <div class="control previous" data-glide-dir="<">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.2929 12L9.64648 6.35353L10.3536 5.64642L16.7071 12L10.3536 18.3535L9.64648 17.6464L15.2929 12Z"
                        fill="#30171B"
                      />
                    </svg>
                  </div>
                  <div class="control next" data-glide-dir=">">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.2929 12L9.64648 6.35353L10.3536 5.64642L16.7071 12L10.3536 18.3535L9.64648 17.6464L15.2929 12Z"
                        fill="#30171B"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>personnalisez votre tototte</h2>
              <p>
                Vous allez créer la tototte idéale pour vous. À chacun son
                expérience, à chacun sa tototte.
              </p>
              <div>
                <h3>finition</h3>
                <p>Choisissez votre favorite</p>
                <div class="color-finition-wrapper">
                  <div
                    class="color-finition"
                    :class="finition.isActive && 'color-finition--active'"
                    v-for="(finition, i) in finitions"
                    :key="'finition-' + i"
                    :style="{ background: finition.color }"
                    @click="activeFinitionColor(i)"
                  ></div>
                </div>
              </div>
              <div>
                <h3>ornement</h3>
                <p>Choisissez votre pierre précieuse</p>
                <div class="color-ornement-wrapper">
                  <div
                    class="color-ornement"
                    :class="ornements.isActive && 'color-ornement--active'"
                    v-for="(ornements, i) in ornements"
                    :key="'finition-' + i"
                    :style="{ backgroundColor: ornements.color }"
                    @click="activeOrnementColor(i, ornements)"
                  ></div>
                </div>
              </div>
              <div>
                <h3>pack saveur</h3>
                <p>Choisissez votre pack de saveurs</p>
                <div class="taste-wrapper">
                  <div
                    class="taste"
                    :class="taste.isActive && 'taste--active'"
                    v-for="(taste, i) in tastes"
                    :key="'taste-' + i"
                    @click="activeTaste(i)"
                  >
                    <div>
                      <h4>{{ taste.label }}</h4>
                      <p>{{ taste.description }}</p>
                    </div>
                    <div class="prices">
                      <span class="old-price" v-if="taste.oldPrice">
                        {{ taste.oldPrice }} </span
                      ><span> {{ taste.price }} </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panier">
                <h3 class="bg2">votre panier est prêt</h3>
                <p>récapitulatif de votre commande</p>
                <div class="panier-wrapper">
                  <div class="panier-item flex-between">
                    <span>1 x thefrenchtototte</span> <span>99,00 €</span>
                  </div>
                  <ul>
                    <li>+ Finition {{ finitionSelected }}</li>
                    <li>+ Ornement {{ ornementSelected }}</li>
                  </ul>
                  <div class="panier-item flex-between">
                    <span>1 x {{ packSelectedLabel }}</span>
                    <span> {{ packSelectedPrice }},00 €</span>
                  </div>
                  <div class="panier-item flex-between">
                    <span>Livraison</span> <span>Offerte</span>
                  </div>
                  <div class="panier-item flex-between">
                    <span>Prix</span>
                    <span>{{ packSelectedPrice + 99 }},00 €</span>
                  </div>
                </div>
                <div class="commande">
                  <div class="flex-between mb-24">
                    <span>Retrait en magasin</span>
                    <span class="flex-center"
                      >Tototte Store Lille
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 15.2929L17.6464 9.64648L18.3535 10.3536L12 16.7071L5.64641 10.3536L6.35352 9.64648L12 15.2929Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="flex-between">
                    <span>Commandez avant 17h</span>
                    <span class="flex-center"
                      >Livrer à 59000
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.5 5.5H19.5V18.5H4.5V5.5ZM9.5 17.5H11.5V13.5H9.5V17.5ZM12.5 17.5H14.5V13.5H12.5V17.5ZM15.5 17.5V12.5H8.5V17.5H5.5V10.814C6.47082 11.1853 7.5679 11.1085 8.48649 10.5836L8.5 10.5759L8.51351 10.5836C9.58953 11.1985 10.9105 11.1985 11.9865 10.5836L12 10.5759L12.0135 10.5836C13.0895 11.1985 14.4105 11.1985 15.4865 10.5836L15.5 10.5759L15.5135 10.5836C16.4321 11.1085 17.5292 11.1853 18.5 10.814V17.5H15.5ZM18.5 6.5V9.70984L18.4903 9.71535C17.7218 10.1545 16.7782 10.1545 16.0097 9.71535L15.5 9.42412L14.9903 9.71535C14.2218 10.1545 13.2782 10.1545 12.5097 9.71535L12 9.42412L11.4903 9.71535C10.7218 10.1545 9.77823 10.1545 9.00965 9.71535L8.5 9.42412L7.99035 9.71535C7.22177 10.1545 6.27823 10.1545 5.50965 9.71535L5.5 9.70984V6.5H18.5Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <slot name="button" />
                <p class="warantie">
                  <span>thefrenchtototte</span> est couverte par une garantie
                  limitée contre les défauts de fabrication pour une période de
                  2 mois à compter de la date d'achat. Cette garantie ne couvre
                  pas les dommages causés par une mauvaise utilisation, une
                  négligence ou une modification non autorisée du produit. Dans
                  les limites permises par la loi,
                  <span>thefrenchtototte</span> décline toute responsabilité
                  pour les dommages directs, indirects, spéciaux, accidentels ou
                  consécutifs découlant de l'utilisation ou de l'incapacité
                  d'utiliser <span>thefrenchtototte</span>, meme si
                  <span>thefrenchtototte</span> a été informée de la possibilité
                  de tels dommages. En utilisant <span>thefrenchtototte</span>,
                  l'utilisateur consent à la collecte et à l'utilisation de ses
                  données conformément à la politique de confidentialité de
                  <span>thefrenchtototte</span>. Les informations collectées
                  peuvent inclure, mais ne sont pas limitées à des données
                  d'utilisation, des informations de localisation et des données
                  personnelles, telles que définies dans ladite politique de
                  confidentialite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="logo-picto">
        <img loading="lazy" src="/images/logo-picto.svg" alt="logo" />
      </div>
      <div class="section-footer">
        <div class="section">
          <div class="row-footer">
            <div class="container">
              <div class="footer-wrapper">
                <div class="social-network">
                  <a
                    v-for="(social, i) in socials"
                    :key="'social-' + i"
                    :href="social.link"
                    target="_blank"
                  >
                    <img loading="lazy" :src="social.icon" alt="social" />
                  </a>
                </div>
                <div class="copyright-wrapper">
                  <slot name="logotype" />
                  <div class="copyright">
                    <p>
                      Copyright © 2024 TheFrenchTototte. Tous droits résérvés
                      <span class="fg-3"
                        >— Utilisation des cookies — Mention légales</span
                      >.
                    </p>
                    <p>
                      Sur une idée originale d’Antoine Daniel, concept art par
                      Tera Silver, 3D par Aurelien Thomas, logo par
                      Baloprisonnier, 3D print par Lunath, Packaging par
                      Illusion et site web par Othman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, reactive, watch } from "vue";
import * as Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import gold1 from "../assets/images/gold-1.png?format=avif";
import gold2 from "../assets/images/gold-2.png?format=avif";
import gold3 from "../assets/images/gold-3.png?format=avif";
import silver1 from "../assets/images/silver-1.png?format=avif";
import silver2 from "../assets/images/silver-2.png?format=avif";
import silver3 from "../assets/images/silver-3.png?format=avif";
import black1 from "../assets/images/black-1.png?format=avif";
import black2 from "../assets/images/black-2.png?format=avif";
import black3 from "../assets/images/black-3.png?format=avif";
import green1 from "../assets/images/green-1.png?format=avif";
import green2 from "../assets/images/green-2.png?format=avif";
import green3 from "../assets/images/green-3.png?format=avif";
import yellow1 from "../assets/images/yellow-1.png?format=avif";
import yellow2 from "../assets/images/yellow-2.png?format=avif";
import yellow3 from "../assets/images/yellow-3.png?format=avif";

const finitions = ref([
  {
    isActive: true,
    color: "linear-gradient(132.51deg, #FFE7DB 0%, #EECDBF 96.01%)",
    name: "or",
  },
  {
    isActive: false,
    color: "linear-gradient(132.51deg, #DBF2FF 0%, #BFC7EE 96.01%)",
    name: "argent",
  },
  {
    isActive: false,
    color: "linear-gradient(132.51deg, #F6F6F6 0%, #D8D8D8 96.01%)",
    name: "ivoire",
  },
  {
    isActive: false,
    color: "linear-gradient(132.51deg, #99969F 0%, #484848 96.01%)",
    name: "ebene",
  },
]);

const ornements = ref([
  {
    isActive: true,
    color: "#017AD7",
    label: "azur",
  },
  {
    isActive: false,
    color: "#35E1C2",
    label: "emeraude",
  },
  {
    isActive: false,
    color: "#FF5EAB",
    label: "rubis",
  },
  {
    isActive: false,
    color: "#2C3C3A",
    label: "obsidienne",
  },
]);

const tastes = ref([
  {
    label: "Pack Starter",
    description: "3 saveurs de decouverte",
    price: "Offert",
    oldPrice: null,
    isActive: true,
    realPrice: 0,
  },
  {
    label: "Pack Sucoteur",
    description: "6 saveurs",
    price: "29€",
    oldPrice: null,
    isActive: false,
    realPrice: 29,
  },
  {
    label: "Pack Sucoteur Pro",
    description: "12 saveurs + 1 jus de Mynthos",
    price: "49€",
    oldPrice: "60€",
    isActive: false,
    realPrice: 49,
  },
]);

const finitionSelected = ref("or");
const ornementSelected = ref("azur");
const packSelectedPrice = ref(0);
const packSelectedLabel = ref("Pack Starter");

const activeFinitionColor = (i) => {
  const allFinitions = [
    goldTastes,
    silverTastes,
    activeTastes.value,
    activeTastes.value,
  ];
  finitions.value.forEach((item, index) => {
    if (index !== i) {
      item.isActive = false;
    } else {
      item.isActive = true;
    }
  });
  activeTastes.value = allFinitions[i];
  finitionSelected.value = finitions.value[i].name;
};

const activeOrnementColor = (i) => {
  const allFinitions = [
    silverTastes,
    activeTastes.value,
    activeTastes.value,
    blackTastes,
  ];
  ornements.value.forEach((item, index) => {
    if (index !== i) {
      item.isActive = false;
    } else {
      item.isActive = true;
    }
  });
  activeTastes.value = allFinitions[i];
  ornementSelected.value = ornements.value[i].label;
};

const activeTaste = (i) => {
  const allFinitions = [blackTastes, greenTastes, yellowTastes];
  tastes.value.forEach((item, index) => {
    if (index !== i) {
      item.isActive = false;
    } else {
      item.isActive = true;
    }
  });
  activeTastes.value = allFinitions[i];
  packSelectedPrice.value = tastes.value[i].realPrice;
  packSelectedLabel.value = tastes.value[i].label;
};

const goldTastes = [gold1, gold2, gold3];
const silverTastes = [silver1, silver2, silver3];
const blackTastes = [black1, black2, black3];
const greenTastes = [green1, green2, green3];
const yellowTastes = [yellow1, yellow2, yellow3];

const activeTastes = ref(goldTastes);

const glideInit = ref("");

onMounted(() => {
  glideInit.value = new Glide.default(".glide", {
    type: "slider",
    perView: 1,
  }).mount();
});

const socials = ref([
  {
    icon: "/icons/logo-instagram.svg",
    link: "https://www.instagram.com/bastiii/",
  },
  {
    icon: "/icons/logo-youtube-2.svg",
    link: "https://www.youtube.com/c/BastiUI",
  },
  {
    icon: "/icons/logo-threads.svg",
    link: "https://www.threads.net/@bastiii",
  },
  {
    icon: "/icons/logo-linkedin.svg",
    link: "https://www.linkedin.com/in/bastienmarecaux/",
  },
  {
    icon: "/icons/logo-twitter.svg",
    link: "https://twitter.com/BastiUi",
  },
]);
</script>

<style lang="postcss" scoped>
.section-shop {
  padding-top: 180px;
  background-color: var(--bg-blue);
  overflow: clip;

  & .section-shop__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    position: relative;
    z-index: 20;

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 88px;
    }

    & > div:nth-child(1) {
      grid-column: span 3 / span 3;

      & .glide {
        position: sticky;
        top: 180px;

        @media screen and (min-width: 1921px) {
          top: 230px;
        }
      }

      .glide__slide {
        border-radius: 8px;
      }
    }

    & > div:nth-child(2) {
      margin-top: 40px;

      @media screen and (min-width: 1024px) {
        margin-top: 0px;
      }

      & h2 {
        font-family: Tartuffo, sans-serif;
        font-weight: 400;
        margin: 0;
        color: var(--fg1);
        font-size: 64px;
        line-height: 90%;
        margin-bottom: 24px;
      }

      & p {
        font-family: Gustavo, sans-serif;
        font-weight: 400;
        line-height: 170%;
        font-size: 14px;
        color: var(--fg3);
      }

      & h3 {
        font-family: Tartuffo, sans-serif;
        font-weight: 400;
        margin: 0;
        margin-top: 60px;
        color: var(--fg1);
        font-size: 40px;
        line-height: 90%;
        margin-bottom: 24px;

        @media screen and (min-width: 1024px) {
          margin-top: 120px;
        }
      }
    }
  }
}

.color-finition-wrapper,
.color-ornement-wrapper {
  display: flex;
  gap: 8px;

  & .color-finition,
  & .color-ornement {
    width: 40px;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    transition: 0.5;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      top: 0;
      left: 0;
      box-shadow: inset 0px -2px 4px rgba(0, 0, 0, 0.25);
      transition: 0.5s;
      opacity: 0;
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }

  & .color-finition--active,
  & .color-ornement--active {
    &::after {
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      width: 115%;
      aspect-ratio: 1;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.5s;
      border: 1px solid var(--fg1);
    }
  }
}

.taste {
  padding: 20px;
  color: var(--fg2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover:not(.taste--active) {
    background-color: white;
  }

  & h4 {
    font-family: Gustavo, sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin: 0;
  }

  & p,
  span {
    font-family: Gustavo, sans-serif;
    font-weight: 400;
    font-size: 15px;
    margin: 0;
  }

  & .prices {
    display: flex;
    align-items: flex-end;
    gap: 8px;

    & .old-price {
      font-size: 11px;
      text-decoration-line: line-through;
      opacity: 0.75;
    }
  }
}

.taste--active {
  border: 1px solid var(--fg1);
  color: var(--fg1);
}

.glide__bullets {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  position: relative;
  bottom: 15px;

  @media screen and (min-width: 1024px) {
    gap: 3px;
  }
}

.glide__bullet {
  all: inherit;
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--fg1);
  opacity: 0.25;
  cursor: pointer;
}

.glide__bullet--active {
  opacity: 1;
}

.controls {
  display: none;
  @media screen and (min-width: 1024px) {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    top: 50%;
    transform: translateY(-50%);
    overflow: clip;
  }
}

.control {
  background-color: #ffffff50;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
  }
}

.previous {
  transform: rotate(180deg) translateX(-20px);
  transition: transform 0.5s;
}

.previous--disabled {
  transform: rotate(180deg) translateX(100%);
}

.next {
  transform: translateX(-20px);
}

.next--disabled {
  transform: translateX(100%);
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-center {
  display: flex;
  align-items: center;
}

.mb-24 {
  margin-bottom: 24px;
}

.panier {
  font-family: Gustavo, sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 125%;
  color: var(--bg3);
  padding-top: 0px;
  margin-top: 150px;
  background-color: var(--fg1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 140%;
    height: 120%;
    top: -50px;
    background-color: var(--fg1);
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    padding-top: 0px;
    background-color: transparent;
    padding-top: 150px;

    &::before {
      content: none;
    }
  }

  & ul {
    list-style-type: none;
    padding: 0;
    margin-top: 0;
  }

  & li {
    margin-left: 8px;
  }

  & .panier-item:not(:first-child) {
    margin-bottom: 24px;
  }
}

.bg2 {
  color: var(--bg2) !important;
}

footer {
  min-height: 80vh;
  background-color: var(--fg1);
  position: relative;
  overflow: clip;

  @media screen and (min-width: 768px) {
    margin-top: -680px;
    min-height: 900px;
  }

  @media screen and (min-width: 1921px) {
    margin-top: -680px;
    min-height: 90vh;
  }
}

.button-cart {
  margin-top: 20px;
}

.warantie {
  font-size: 8px !important;

  & span {
    font-family: Tartuffo, Gustavo, sans-serif;
  }
}

.social-network {
  display: flex;
  gap: 10px;
}

.section-footer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  bottom: 40px;
  padding-top: 340px;
}

.copyright-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
}

.copyright {
  font-family: Gustavo, sans-serif;
  color: var(--fg3);
  font-size: 13px;

  & p {
    margin: 0;
  }
}

.fg-3 {
  color: var(--fg3);
  opacity: 0.5;
}

.logo-picto {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(-35%, 10%);
}
</style>