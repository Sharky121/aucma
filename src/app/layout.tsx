import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Callback from "@/components/callback/callback";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ['400', '700', '900']
});

export const metadata: Metadata = {
  title: "Полуприцепы AUCMA",
  description: "Официальный дистрибьютор на территории Евразийского экономического союза (ЕАЭС) продукции фирмы AUCMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header/>

        {children}
        
        <Callback />
        <Footer />

        {/* SVG-ICONS */}
        <div style={{ display: "none" }}>
          <svg preserveAspectRatio="xMinYMid">
            <symbol id="ico-arrow" viewBox="0 0 22 22">
              <polygon fill="currentColor" fillRule="evenodd" clipRule="evenodd" points="22,8 18,4 18,15 3,0 0,3 15,18 4,18 8,22 22.005,22.005"></polygon>
            </symbol>
            <symbol id="ico-phone" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19.425 20.45q-2.9 0-5.762-1.388-2.863-1.387-5.113-3.637-2.25-2.25-3.637-5.1-1.388-2.85-1.388-5.775 0-.45.3-.75t.75-.3h3.25q.4 0 .687.237.288.238.363.613L9.45 7.3q.05.375-.025.675-.075.3-.325.525l-2.275 2.25q1.175 2 2.812 3.625Q11.275 16 13.35 17.2l2.225-2.25q.25-.25.588-.35.337-.1.687-.05l2.775.575q.375.075.613.35.237.275.237.675v3.25q0 .45-.3.75t-.75.3Z"></path>
            </symbol>
            <symbol id="ico-search" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19.025 20.05 13.25 14.3q-.75.625-1.725.975-.975.35-2 .35-2.575 0-4.35-1.775Q3.4 12.075 3.4 9.5q0-2.55 1.775-4.338 1.775-1.787 4.35-1.787 2.55 0 4.325 1.775 1.775 1.775 1.775 4.35 0 1.075-.35 2.05-.35.975-.95 1.7l5.775 5.775q.2.2.2.5t-.225.525q-.225.225-.537.225-.313 0-.513-.225Zm-9.5-5.925q1.925 0 3.263-1.35 1.337-1.35 1.337-3.275 0-1.925-1.337-3.275-1.338-1.35-3.263-1.35-1.95 0-3.287 1.35Q4.9 7.575 4.9 9.5q0 1.925 1.338 3.275 1.337 1.35 3.287 1.35Z"></path>
            </symbol> 
            <symbol id="ico-location" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 16.8q2.6-2.075 3.925-3.988Q17.25 10.9 17.25 9.15q0-1.475-.538-2.513-.537-1.037-1.324-1.675-.788-.637-1.713-.925Q12.75 3.75 12 3.75t-1.675.287q-.925.288-1.712.925-.788.638-1.326 1.675Q6.75 7.675 6.75 9.15q0 1.75 1.325 3.662Q9.4 14.725 12 16.8Zm0 1.575q-.2 0-.375-.05t-.325-.175q-3.05-2.375-4.55-4.613-1.5-2.237-1.5-4.387 0-1.7.613-2.988Q6.475 4.875 7.438 4q.962-.875 2.175-1.312Q10.825 2.25 12 2.25t2.388.438Q15.6 3.125 16.562 4q.963.875 1.576 2.162.612 1.288.612 2.988 0 2.15-1.5 4.387-1.5 2.238-4.55 4.613-.125.125-.312.175-.188.05-.388.05Zm0-7.625q.725 0 1.238-.512.512-.513.512-1.238t-.512-1.238Q12.725 7.25 12 7.25t-1.238.512Q10.25 8.275 10.25 9t.512 1.238q.513.512 1.238.512Zm-6 11q-.325 0-.537-.212-.213-.213-.213-.538 0-.325.213-.538.212-.212.537-.212h12q.325 0 .538.212.212.213.212.538 0 .325-.212.538-.213.212-.538.212Zm6-12.6Z"></path>            
            </symbol> 
            <symbol id="ico-plus" viewBox="0 0 470 470">
              <path d="M235.0000000000004 0 C364.7000307560901 0 470.0000000000008 105.29996924391018 470.0000000000008 235.0000000000004 C470.0000000000008 364.7000307560901 364.7000307560901 470.0000000000008 235.0000000000004 470.0000000000008 C105.29996924391018 470.0000000000008 0 364.7000307560901 0 235.0000000000004 C0 105.29996924391018 105.29996924391018 0 235.0000000000004 0 Z"></path>
              <path d="M235.0000000000004 0 C364.7000307560901 0 470.0000000000008 105.29996924391018 470.0000000000008 235.0000000000004 C470.0000000000008 364.7000307560901 364.7000307560901 470.0000000000008 235.0000000000004 470.0000000000008 C105.29996924391018 470.0000000000008 0 364.7000307560901 0 235.0000000000004 C0 105.29996924391018 105.29996924391018 0 235.0000000000004 0 Z"></path>
            </symbol>
            <symbol id="ico-yt" viewBox="-21 -117 684.666748046875 684">
              <path fill="currentColor" d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"></path>
            </symbol>
            <symbol id="ico-arrow-left" viewBox="0 0 26 26">
              <polygon fill="currentColor" fillRule="evenodd" clipRule="evenodd" points="16,3 10,3 18,11 0,11 0,15 18,15 10,23 16,23 26,13"></polygon> 
            </symbol>
            <symbol id="ico-cross" viewBox="0 0 24 24">
              <path fill="currentColor" d="m12 13.05-5.075 5.075q-.2.2-.512.212-.313.013-.538-.212-.225-.225-.225-.525 0-.3.225-.525L10.95 12 5.875 6.925q-.2-.2-.212-.513-.013-.312.212-.537.225-.225.525-.225.3 0 .525.225L12 10.95l5.075-5.075q.2-.2.513-.213.312-.012.537.213.225.225.225.525 0 .3-.225.525L13.05 12l5.075 5.075q.2.2.212.512.013.313-.212.538-.225.225-.525.225-.3 0-.525-.225Z"></path>
            </symbol>
            <symbol id="ico-arrow-right-top" viewBox="0 0 22 22">
              <polygon fill="currentColor" fillRule="evenodd" clipRule="evenodd" points="22,8 18,4 18,15 3,0 0,3 15,18 4,18 8,22 22.005,22.005"></polygon>
            </symbol>
            <symbol id="ico-pdf" viewBox="0 0 512 512">
              <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"></path>
            </symbol>
          </svg>
        </div>
      </body>
    </html>
  );
}

