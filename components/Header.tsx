"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Altura de exibição do logo; ajuste a largura conforme a proporção do arquivo. */
const LOGO_HEIGHT = 120;
const LOGO_WIDTH = 120;

/**
 * Entrega logo-120h.png em 1x e logo-240h.png em 2x: para imagens de tamanho
 * fixo o next/image monta o srcSet com os descritores 1x/2x, e o loader
 * escolhe o arquivo certo para cada densidade.
 */
function logoLoader({ width }: { src: string; width: number }) {
  // O next/image arredonda a largura pedida para a próxima medida configurada,
  // então o corte fica no meio do caminho entre 1x e 2x.
  return width > LOGO_WIDTH * 1.5 ? "/logo-240h.png" : "/logo-120h.png";
}

const links = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between gap-6 px-6 py-4">
      <Link href="/" aria-label="Quitutes da Kika - início">
        <Image
          loader={logoLoader}
          src="/logo-120h.png"
          alt="Quitutes da Kika"
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          priority
        />
      </Link>

      <nav>
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const ativo = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={ativo ? "page" : undefined}
                  className={ativo ? "text-tijolo" : "hover:text-tijolo"}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
