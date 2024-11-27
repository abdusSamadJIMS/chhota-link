import Header from "@/components/header";
import HeroText from "@/components/hero-text";
import MainBGImage from "@/components/main-bg-image";
import UrlGenerateForm from "@/components/url-generate-form";

export default function Home() {
  return (
    <>

      <Header />
      <div className="grid sm:grid-cols-2 z-10">
        <div className="">
          <HeroText />
          <UrlGenerateForm />
        </div>
        <MainBGImage />
      </div>

    </>
  );
}
