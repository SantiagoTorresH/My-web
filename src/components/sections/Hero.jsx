import { useState } from "react";
import { profile } from "../../data/profile";
import { NeuronCanvas } from "../NeuronCanvas";
//importamos la foto de perfil que esta en la carpeta assets
import imageprofile from "../../assets/profile.jpg";

// comocar img al hacer click en las iniciales y que sea como una tarjeta que se volte y muestre la img
export function Hero() {
  // const [showImage, setShowImage] = useState(true);
  const [flipped, setFlipped] = useState(true);

  const initials = profile.name

    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="inicio"
      className="relative scroll-mt-20 overflow-hidden bg-brand-deep px-5 py-20 sm:py-28"
    >
      <div className="absolute inset-0 opacity-40">
        <NeuronCanvas />
      </div>
      {/* al dar click en las iniciales aparece la img y viceversa */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        {/* // colocamos movimiento al avatar a los lados y que se vea como si estuviera flotando ya sea este en iniciales o img */}
        <div
          onClick={() => setFlipped(!flipped)}
          className="    h-32 w-32
    cursor-pointer
    animate-float
    [perspective:1000px]
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_25px_rgba(163,230,53,0.6)] "
    style ={{animation: 'float 2s ease-in-out infinite'}}
        >
          <div
            className={`relative h-full w-full rounded-full transition-transform duration-700 [transform-style:preserve-3d] ${
              flipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* Frente */}
            <div className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-brand-gold bg-brand-dark text-4xl font-bold text-brand-accent [backface-visibility:hidden]">
              {initials}
            </div>

            {/* Reverso */}
            <div className="absolute inset-0 rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
              <img
                src={imageprofile}
                alt="Foto de perfil"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* <div
        onClick={() => setShowImage(!showImage)}
        className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-dark text-4xl font-bold text-brand-accent">
          {showImage ? (
            <img
              src={imageprofile}
              alt="Foto de perfil"
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div> */}

        <div className="flex-1">
          {profile.available && (
            <span className="mb-3 inline-block rounded-full border border-brand-lime/40 bg-brand-lime/10 px-3 py-1 text-xs text-brand-lime">
              Disponible para oportunidades
            </span>
          )}

          <h1 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mb-4 text-xl text-brand-accent">{profile.role}</p>
          <p className="mb-6 max-w-2xl text-white/75">{profile.tagline}</p>

          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href="#contacto"
              className="rounded-lg bg-brand-lime px-6 py-3 font-medium text-brand-dark transition hover:bg-brand-accent"
            >
              Contáctame
            </a>
            <a
              href={profile.cvUrl}
              className="rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition hover:border-brand-lime hover:text-brand-lime"
            >
              Descargar CV
            </a>
            <a
              href={profile.social[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition hover:border-brand-lime hover:text-brand-lime"
            >
              Ver GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
