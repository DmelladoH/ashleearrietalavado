import { getImage } from "astro:assets";
import deusto from "@pictures/experience/deusto.png";
import cop from "@pictures/experience/cop.svg";
import medicosBilvao from "@pictures/experience/medicos-bilvao.png";
import siac from "@pictures/experience/siac.png";
import gac from "@pictures/experience/gac.png";
import viu from "@pictures/experience/viu.png";

const width = 96;
const height = 40;

export const experienceImgLinks = await Promise.all([
  getImage({
    src: deusto,
    format: "webp",
    width,
    height,
  }).then((img) => ({
    link: img.src,
    name: "Deusto",
  })),
  getImage({
    src: cop,
    width,
    height,
  }).then((img) => ({
    link: img.src,
    name: "Colegio de Psicología de Bizkaia",
  })),
  getImage({
    src: medicosBilvao,
    format: "webp",
    width,
    height,
  }).then((img) => ({
    link: img.src,
    name: "Centro de Especialistas Médicos Bilbao, pediatría y adultos",
  })),
  getImage({
    src: siac,
    format: "webp",
    width,
    height,
  }).then((img) => ({
    link: img.src,
    name: "SIAC",
  })),
  getImage({
    src: gac,
    format: "webp",
    width,
    height,
  }).then((img) => ({
    link: img.src,
    name: "GAC, Grupo ALBOR-COHS",
  })),
  getImage({
    src: viu,
    format: "webp",
    width,
    height,
  }).then((img) => ({
    link: img.src,
    name: "VIU, Universidad Internacional de Valencia",
  })),
]);
