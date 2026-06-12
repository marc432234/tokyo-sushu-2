import Image from "next/image";
import Link from "next/link";

import { CtaSection } from "@/components/sections/CtaSection";
import { StructuredData } from "@/components/seo/StructuredData";
import ScrollReveal from "@/components/ScrollReveal";
import { BookingButton } from "@/components/ui/ReservationModal";
import { getSiteConfig } from "@/lib/get-site-config";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages } from "@/lib/site";

const siteConfig = getSiteConfig();

const pageContent = getPageContent("contact");

export const metadata = createPageMetadata({
  path: "/contact",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.contact,
});

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#160206]">
      <StructuredData
        name="Contact Tokyo Club Sushi Speakeasy"
        path="/contact"
        image={pageOgImages.contact}
        description="Get in touch with Tokyo Club Sushi Speakeasy. Reserve a table, plan a private event, or reach our team at 1000 Collins Ave, South Beach."
      />

      <section className="relative isolate min-h-[600px] pt-(--header-offset) pb-20 md:pb-32">
        <Image
          src={pageContent.hero.image.src}
          alt={pageContent.hero.image.alt}
          fill
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/10 via-[#170307]/35 to-transparent" />

        <div className="container-shell flex min-h-[calc(600px-var(--header-offset))] items-center">
          <div className="max-w-[39rem] pb-14 pt-20">
            <span className="eyebrow text-white">{pageContent.hero.eyebrow}</span>
            <h1 className="mt-7 font-(family-name:--font-display) text-[2.5rem] md:text-[4rem] leading-[1.02] text-white">
              {pageContent.hero.title.split("venue").length > 1 ? (
                <>
                  {pageContent.hero.title.split("venue")[0]}
                  <span className="text-highlight-underline-amber"><span className="italic" style={{ color: "#FFC107" }}>venue</span></span>
                  {pageContent.hero.title.split("venue").slice(1).join("venue")}
                </>
              ) : (
                pageContent.hero.title
              )}
            </h1>
            <p className="mt-5 max-w-xl text-base font-light leading-[1.4] tracking-wide text-white/70">
              {pageContent.hero.description}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 z-10 w-full max-w-[1360px] -translate-x-1/2 px-4 md:px-10 translate-y-1/2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {pageContent.occasions.map((occasion, index) => {
            const icons = [
              <svg key="date" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#dateSvg)">
                  <path d="M25.4784 40.4893H25.4062V27.3436H36.3534C37.1248 27.3436 37.7596 26.7088 37.7596 25.9374C37.7596 25.1659 37.1248 24.5311 36.3534 24.5311C28.1177 24.5311 19.8821 24.5311 11.6465 24.5311C10.875 24.5311 10.2402 25.1659 10.2402 25.9374C10.2402 26.7088 10.875 27.3436 11.6465 27.3436H22.5937V40.4893H22.5215C19.6293 40.4893 17.2752 42.8424 17.2752 45.7346V46.583C17.2752 46.6768 17.2848 47.1748 17.6873 47.5772C18.0897 47.9797 18.5877 47.9893 18.6815 47.9893H29.3174C30.0946 47.9893 30.7237 47.3593 30.7237 46.583V45.7346C30.7237 42.8424 28.3705 40.4893 25.4784 40.4893Z" fill="#CF183C"/>
                  <path d="M9.62812 31.2296H2.8125V20.9396C2.8125 20.1633 2.1825 19.5333 1.40625 19.5333C0.63 19.5333 0 20.1633 0 20.9396V37.3233C0 38.0996 0.63 38.7296 1.40625 38.7296H2.03062L0.496875 46.3036C0.343594 47.0596 0.839625 47.8079 1.59563 47.9611C2.35162 48.1144 3.09984 47.6184 3.25313 46.8624L4.90031 38.7296H9.04125L10.6884 46.8624C10.8417 47.6184 11.5899 48.1144 12.3459 47.9611C13.1019 47.8079 13.598 47.0596 13.4447 46.3036C12.9335 43.7789 12.4222 41.2543 11.9109 38.7296H12.5353C13.3116 38.7296 13.9416 38.0996 13.9416 37.3233V35.543C13.9416 33.1646 12.0066 31.2296 9.62812 31.2296Z" fill="#CF183C"/>
                  <path d="M46.5939 19.5333C45.8224 19.5333 45.1877 20.1681 45.1877 20.9396V31.2296H38.372C35.9936 31.2296 34.0586 33.1646 34.0586 35.543V37.3233C34.0586 38.0996 34.6886 38.7296 35.4648 38.7296H36.0892L34.5555 46.3036C34.4025 47.0602 34.8992 47.8084 35.6552 47.9611C36.4105 48.1138 37.1582 47.6181 37.3117 46.8624L38.9589 38.7296H43.0998C43.6489 41.4405 44.1979 44.1514 44.747 46.8624C44.9003 47.6184 45.6485 48.1144 46.4045 47.9611C47.1605 47.8079 47.6566 47.0596 47.5033 46.3036C46.9921 43.7789 46.4807 41.2543 45.9695 38.7296H46.5939C47.3702 38.7296 48.0002 38.0996 48.0002 37.3233V20.9396C48.0002 20.1681 47.3654 19.5333 46.5939 19.5333Z" fill="#CF183C"/>
                  <path d="M22.9729 18.5083C23.2562 18.7349 23.5986 18.9264 24.0003 18.9268C24.5857 18.9273 24.958 18.5789 25.0306 18.5083C27.6134 15.9229 30.1962 13.3375 32.779 10.7521C35.2199 8.27723 35.1985 4.25648 32.779 1.83623C30.4097 -0.533679 26.4958 -0.613929 24.0012 1.70095L24.0003 1.70001C21.5873 -0.269023 18.2898 -0.430366 16.1006 1.13029C13.345 3.09482 12.6588 7.56473 15.2245 10.7522C19.2153 14.9129 22.2157 17.9024 22.9729 18.5083Z" fill="#CF183C"/>
                </g>
                <defs>
                  <clipPath id="dateSvg"><rect width="48" height="48" fill="white"/></clipPath>
                </defs>
              </svg>,
              <svg key="birthday" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#birthdaySvg)">
                  <path d="M12.6719 8.61586C14.2497 8.61586 15.5288 7.33626 15.5288 5.75789C15.5288 4.70601 14.2601 2.3437 13.4135 0.884668C13.0832 0.315137 12.2607 0.315137 11.9302 0.884668C11.0838 2.3437 9.81494 4.70601 9.81494 5.75789C9.81494 7.33626 11.0941 8.61586 12.6719 8.61586Z" fill="#CF183C"/>
                  <path d="M24 8.61586C25.5778 8.61586 26.8569 7.33626 26.8569 5.75789C26.8569 4.70601 25.5882 2.3437 24.7417 0.884668C24.4113 0.315137 23.5888 0.315137 23.2583 0.884668C22.4119 2.3437 21.1431 4.70601 21.1431 5.75789C21.1431 7.33626 22.4221 8.61586 24 8.61586Z" fill="#CF183C"/>
                  <path d="M35.3276 8.61586C36.9055 8.61586 38.1846 7.33626 38.1846 5.75789C38.1846 4.70601 36.9159 2.3437 36.0693 0.884668C35.7388 0.315137 34.9165 0.315137 34.586 0.884668C33.7395 2.3437 32.4707 4.70601 32.4707 5.75789C32.4707 7.33626 33.7498 8.61586 35.3276 8.61586Z" fill="#CF183C"/>
                  <path d="M11.0993 10.9642C10.4005 10.9642 9.83398 11.531 9.83398 12.23V22.4417H15.5105V12.2301C15.5105 11.531 14.9441 10.9643 14.2452 10.9643H11.0993V10.9642Z" fill="#CF183C"/>
                  <path d="M22.427 10.9642C21.7282 10.9642 21.1616 11.531 21.1616 12.23V22.4417H26.8382V12.2301C26.8382 11.531 26.2717 10.9643 25.5728 10.9643H22.427V10.9642Z" fill="#CF183C"/>
                  <path d="M33.7551 10.9642C33.0563 10.9642 32.4897 11.531 32.4897 12.23V22.4417H38.1663V12.2301C38.1663 11.531 37.5998 10.9643 36.901 10.9643H33.7551V10.9642Z" fill="#CF183C"/>
                  <path d="M6.21089 33.384C6.43983 33.384 6.67411 33.3517 6.90699 33.2827L10.4569 32.2319C11.6173 31.8884 12.8273 31.7166 14.0372 31.7166C15.2472 31.7166 16.4572 31.8884 17.6176 32.2319L20.4196 33.0614C21.5799 33.4049 22.7899 33.5766 23.9999 33.5766C25.2098 33.5766 26.4198 33.4049 27.5802 33.0614L30.3822 32.2319C31.5425 31.8884 32.7526 31.7166 33.9625 31.7166C35.1724 31.7166 36.3825 31.8884 37.5428 32.2319L41.0927 33.2827C41.3255 33.3516 41.56 33.384 41.7888 33.384C42.9249 33.384 43.9251 32.5889 43.9251 31.5328V27.9073C43.9251 26.7054 42.7982 25.7311 41.4081 25.7311H6.59171C5.20158 25.7311 4.07471 26.7054 4.07471 27.9073V31.5328C4.07471 32.5889 5.07502 33.384 6.21089 33.384Z" fill="#CF183C"/>
                  <path d="M46.5938 44.73H42.7551V36.1061C42.439 36.1652 42.1158 36.1964 41.789 36.1964C41.2835 36.1964 40.7806 36.1235 40.2945 35.9796L36.7446 34.9287C35.849 34.6636 34.913 34.5292 33.9626 34.5292C33.0123 34.5292 32.0763 34.6636 31.1807 34.9287L28.3787 35.7582C26.9644 36.1769 25.4913 36.3892 24.0001 36.3892C22.5089 36.3892 21.0357 36.1769 19.6214 35.7582L16.8194 34.9287C15.9238 34.6636 14.9878 34.5292 14.0375 34.5292C13.0871 34.5292 12.1511 34.6636 11.2555 34.9287L7.70559 35.9796C7.21941 36.1235 6.71662 36.1965 6.21112 36.1965C5.88422 36.1965 5.56097 36.1653 5.24503 36.1061V44.7301H1.40625C0.629625 44.7301 0 45.3597 0 46.1364C0 46.913 0.629625 47.5426 1.40625 47.5426H46.5938C47.3704 47.5426 48 46.913 48 46.1364C48 45.3597 47.3704 44.73 46.5938 44.73Z" fill="#CF183C"/>
                </g>
                <defs>
                  <clipPath id="birthdaySvg"><rect width="48" height="48" fill="white"/></clipPath>
                </defs>
              </svg>,
              <svg key="group" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2444 44.3972C16.2787 44.5671 16.3707 44.7199 16.5047 44.8298C16.6388 44.9396 16.8067 44.9998 16.98 45H25.02C25.1932 44.9998 25.3611 44.9398 25.4951 44.83C25.6291 44.7202 25.7211 44.5675 25.7555 44.3977L28.4564 30.8945C28.4853 30.749 28.4999 30.6011 28.5 30.4528V25.2247C27.9981 25.0211 27.5464 24.7109 27.176 24.3157C26.8057 23.9205 26.5255 23.4496 26.3549 22.9356L25.5385 20.4872C25.5009 20.3744 25.4907 20.2544 25.5086 20.1369C25.5265 20.0194 25.5721 19.9079 25.6416 19.8115C25.7111 19.7151 25.8025 19.6366 25.9082 19.5824C26.014 19.5283 26.1312 19.5 26.25 19.5H28.5V18.75C28.4998 18.5512 28.4207 18.3605 28.2801 18.2199C28.1395 18.0793 27.9488 18.0002 27.75 18H14.25C14.0512 18.0002 13.8605 18.0793 13.7199 18.2199C13.5793 18.3605 13.5002 18.5512 13.5 18.75V30.4528C13.5001 30.6016 13.5148 30.75 13.5439 30.8959L16.2444 44.3972ZM15 20.25C15 20.0511 15.079 19.8603 15.2197 19.7197C15.3603 19.579 15.5511 19.5 15.75 19.5C15.9489 19.5 16.1397 19.579 16.2803 19.7197C16.421 19.8603 16.5 20.0511 16.5 20.25V27.75C16.5 27.9489 16.421 28.1397 16.2803 28.2803C16.1397 28.421 15.9489 28.5 15.75 28.5C15.5511 28.5 15.3603 28.421 15.2197 28.2803C15.079 28.1397 15 27.9489 15 27.75V20.25Z" fill="#CF183C"/>
                <path d="M10.6243 36.75L11.8516 30H3.14893L4.37621 36.75H10.6243Z" fill="#CF183C"/>
                <path d="M10.6243 38.25H4.37621L3.14893 45H11.8516L10.6243 38.25Z" fill="#CF183C"/>
                <path d="M10.2803 8.15897C10.3502 8.08953 10.4056 8.0069 10.4433 7.91588C10.481 7.82485 10.5003 7.72725 10.5 7.62872V5.25C10.5 4.65326 10.263 4.08097 9.84099 3.65901C9.41904 3.23705 8.84674 3 8.25 3C7.65327 3 7.08097 3.23705 6.65901 3.65901C6.23706 4.08097 6 4.65326 6 5.25V7.62872C5.99972 7.72725 6.01899 7.82485 6.05671 7.91588C6.09444 8.0069 6.14985 8.08953 6.21975 8.15897L8.25 10.1894L10.2803 8.15897Z" fill="#CF183C"/>
                <path d="M39.75 21C40.5784 21 41.25 20.3284 41.25 19.5C41.25 18.6716 40.5784 18 39.75 18C38.9216 18 38.25 18.6716 38.25 19.5C38.25 20.3284 38.9216 21 39.75 21Z" fill="#CF183C"/>
                <path d="M33.7783 31.4616C33.927 31.9098 34.2132 32.2998 34.5963 32.576C34.9794 32.8522 35.4398 33.0005 35.912 33H36.0883C36.5605 33.0006 37.0209 32.8523 37.404 32.5761C37.7871 32.3 38.0733 31.9101 38.222 31.4619L39.2094 28.5H32.791L33.7783 31.4616Z" fill="#CF183C"/>
                <path d="M26.747 12.3083C26.644 11.7989 26.3682 11.3406 25.9662 11.0111C25.5643 10.6816 25.0608 10.5011 24.5411 10.5H17.4592C16.9395 10.5012 16.4362 10.6818 16.0343 11.0112C15.6325 11.3407 15.3567 11.7989 15.2537 12.3082L14.415 16.5H27.5852L26.747 12.3083Z" fill="#CF183C"/>
                <path d="M27.778 22.4616C27.9267 22.9098 28.213 23.2997 28.596 23.5759C28.9791 23.8521 29.4395 24.0005 29.9118 24H36.7499C36.9488 24 37.1396 24.079 37.2802 24.2197C37.4209 24.3603 37.4999 24.5511 37.4999 24.75C37.4999 24.9489 37.4209 25.1397 37.2802 25.2803C37.1396 25.421 36.9488 25.5 36.7499 25.5H31.7905L32.2906 27H39.7092L40.5383 24.5128C40.5881 24.3635 40.6836 24.2336 40.8113 24.1415C40.9391 24.0495 41.0925 24 41.2499 24H42.088C42.5602 24.0006 43.0206 23.8523 43.4037 23.5761C43.7868 23.3 44.073 22.9101 44.2218 22.4619L44.7093 21H42.3468C42.0838 21.456 41.7054 21.8347 41.2497 22.0981C40.7939 22.3614 40.2768 22.5 39.7504 22.5C39.224 22.5 38.7069 22.3614 38.2511 22.0981C37.7953 21.8347 37.4169 21.456 37.154 21H27.2905L27.778 22.4616Z" fill="#CF183C"/>
                <path d="M23.25 6.75C23.2498 6.55116 23.1707 6.36052 23.0301 6.21992C22.8895 6.07931 22.6988 6.00022 22.5 6H19.5C19.3012 6.00022 19.1105 6.07931 18.9699 6.21992C18.8293 6.36052 18.7502 6.55116 18.75 6.75V9H23.25V6.75Z" fill="#CF183C"/>
                <path d="M40.5 43.5592H36.75V34.5C36.5315 34.5392 36.3101 34.559 36.0881 34.5592H35.9119C35.6899 34.559 35.4685 34.5392 35.25 34.5V43.5592H31.5C31.3011 43.5592 31.1103 43.6382 30.9697 43.7788C30.829 43.9195 30.75 44.1102 30.75 44.3092C30.75 44.5081 30.829 44.6988 30.9697 44.8395C31.1103 44.9801 31.3011 45.0592 31.5 45.0592H40.5C40.6989 45.0592 40.8897 44.9801 41.0303 44.8395C41.171 44.6988 41.25 44.5081 41.25 44.3092C41.25 44.1102 41.171 43.9195 41.0303 43.7788C40.8897 43.6382 40.6989 43.5592 40.5 43.5592Z" fill="#CF183C"/>
                <path d="M44.1185 15.0396C43.2785 14.6562 42.3266 14.5961 41.4451 14.8708C40.5635 15.1455 39.8143 15.7358 39.3408 16.5285C39.9208 16.4476 40.5118 16.5393 41.0399 16.7921C41.366 16.4936 41.7727 16.2977 42.2094 16.2287C42.646 16.1597 43.0933 16.2207 43.4955 16.4041C43.5851 16.445 43.6819 16.4679 43.7803 16.4714C43.8788 16.4749 43.9769 16.459 44.0692 16.4245C44.1615 16.3901 44.2461 16.3378 44.3182 16.2707C44.3902 16.2036 44.4484 16.1229 44.4893 16.0333C44.5302 15.9437 44.5531 15.8469 44.5566 15.7485C44.5601 15.6501 44.5441 15.5519 44.5097 15.4597C44.4753 15.3674 44.423 15.2828 44.3559 15.2107C44.2888 15.1386 44.2081 15.0805 44.1185 15.0396Z" fill="#CF183C"/>
                <path d="M8.78034 11.7803C8.7107 11.85 8.62802 11.9052 8.53702 11.9429C8.44602 11.9806 8.34849 12 8.25 12C8.15151 12 8.05398 11.9806 7.96298 11.9429C7.87198 11.9052 7.7893 11.85 7.71966 11.7803L7.5 11.5607V28.5H9V11.5607L8.78034 11.7803Z" fill="#CF183C"/>
              </svg>,
            ];
            return (
              <div key={occasion.title} className="p-6 bg-gradient-to-b from-[#cf183c]/10 to-[#cf183c]/25 rounded-lg outline outline-1 outline-white/20 backdrop-blur-[30px] flex flex-col justify-end items-start gap-4 overflow-hidden card-hover">
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  {icons[index]}
                  <div className="self-stretch justify-start text-white text-2xl font-normal font-['Lora'] leading-[33.60px]">{occasion.title}</div>
                  <div className="self-stretch justify-start text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">{occasion.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      <ScrollReveal>
        <div className="container-shell pt-20 md:pt-[160px] pb-12 md:pb-20 flex justify-center items-center flex-wrap gap-4">
          <a href={siteConfig.bookingUrl} className="h-14 px-6 py-[17px] bg-[#ad6d25] flex justify-center items-center gap-2.5 btn-glow">
            <div className="justify-start text-white text-base font-normal font-['Outfit'] leading-[22.40px] tracking-[2.56px]">RESERVE A TABLE</div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4165 10H4.1665" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
              <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={siteConfig.phoneHref} className="h-14 px-6 py-[17px] flex justify-center items-center gap-1 btn-glow">
            <div className="justify-start text-white text-base font-normal font-['Outfit'] uppercase leading-[22.40px] tracking-[2.56px]">Call to Plan</div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4165 10H4.1665" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
              <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="container-shell pb-16 md:pb-[120px] flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4 md:gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-start">
                  <span className="text-white text-2xl md:text-5xl font-normal font-['Lora'] leading-[57.60px]">Send us a </span>
                  <span className="text-[#cf183c] text-2xl md:text-5xl font-normal font-['Lora'] leading-[57.60px]">message</span>
                </div>
                <div className="self-stretch justify-start text-white/60 text-base font-light font-['Outfit'] leading-[22.40px] tracking-wide">{pageContent.formIntro.description}</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
              <div className="self-stretch flex justify-start items-start gap-3">
                <div className="size-16 p-4 bg-white/5 rounded-lg outline outline-1 outline-white/10 flex justify-start items-center gap-2.5">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1569 28.4894C17.5788 29.0307 16.8059 29.3334 16.0015 29.3334C15.1971 29.3334 14.4243 29.0307 13.846 28.4894C8.55069 23.5014 1.45435 17.9293 4.91503 9.83963C6.78617 5.46563 11.2778 2.66675 16.0015 2.66675C20.7252 2.66675 25.2168 5.46563 27.088 9.83963C30.5443 17.9191 23.4653 23.5186 18.1569 28.4894Z" stroke="#CF183C" strokeWidth="2" />
                    <path d="M20.6668 14.6667C20.6668 17.244 18.5775 19.3333 16.0002 19.3333C13.4228 19.3333 11.3335 17.244 11.3335 14.6667C11.3335 12.0893 13.4228 10 16.0002 10C18.5775 10 20.6668 12.0893 20.6668 14.6667Z" stroke="#CF183C" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <span className="text-white">Visit us</span>
                  <div className="self-stretch justify-start text-[#c0c0c0] text-base font-normal font-['Outfit'] leading-[22.40px]">{siteConfig.address}</div>
                  <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="self-stretch justify-start text-[#ad6d25] text-base font-normal font-['Outfit'] underline leading-[22.40px]">Open in maps</a>
                </div>
              </div>
              <div className="self-stretch flex justify-start items-start gap-3">
                <div className="size-16 p-4 bg-white/5 rounded-lg outline outline-1 outline-white/10 flex justify-start items-center gap-2.5">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.211 7.61631L11.6741 6.40833C11.3231 5.61851 11.1476 5.22357 10.8851 4.92135C10.5561 4.54259 10.1273 4.26392 9.64757 4.11713C9.26478 4 8.83261 4 7.96828 4C6.70388 4 6.07168 4 5.54097 4.24305C4.91582 4.52936 4.35125 5.15104 4.1263 5.8008C3.93534 6.35239 3.99005 6.91924 4.09944 8.05293C5.26388 20.1202 11.8798 26.7361 23.947 27.9006C25.0807 28.0099 25.6477 28.0646 26.1991 27.8737C26.849 27.6487 27.4706 27.0842 27.757 26.459C27.9999 25.9283 27.9999 25.2961 27.9999 24.0317C27.9999 23.1674 27.9999 22.7353 27.8829 22.3525C27.7361 21.8727 27.4574 21.4439 27.0786 21.1149C26.7765 20.8525 26.3815 20.6769 25.5917 20.3258L24.3837 19.789C23.5283 19.4089 23.1006 19.2187 22.6661 19.1774C22.2501 19.1378 21.8307 19.1962 21.4414 19.3478C21.0346 19.5062 20.6751 19.8058 19.9559 20.4051C19.2402 21.0015 18.8823 21.2998 18.445 21.4595C18.0573 21.6013 17.5447 21.6537 17.1365 21.5935C16.6758 21.5257 16.3231 21.3371 15.6177 20.9602C13.423 19.7873 12.2127 18.577 11.0398 16.3823C10.6629 15.6769 10.4744 15.3242 10.4065 14.8635C10.3463 14.4553 10.3988 13.9427 10.5404 13.555C10.7002 13.1177 10.9984 12.7598 11.5949 12.044C12.1942 11.3249 12.4938 10.9654 12.6522 10.5585C12.8038 10.1693 12.8622 9.74987 12.8226 9.33397C12.7813 8.89936 12.5912 8.47168 12.211 7.61631Z" stroke="#CF183C" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <span className="text-white">Prefer to call?</span>
                  <div className="self-stretch justify-start text-[#c0c0c0] text-base font-light font-['Outfit'] leading-[22.40px]">For group bookings and same-day plans, calling is the fastest way to get everything sorted.</div>
                  <a href={siteConfig.phoneHref} className="self-stretch justify-start text-[#ad6d25] text-base font-normal font-['Outfit'] underline leading-[22.40px]">{siteConfig.phone}</a>
                </div>
              </div>
              <div className="self-stretch flex justify-start items-start gap-3">
                <div className="size-16 p-4 bg-white/5 rounded-lg outline outline-1 outline-white/10 flex justify-start items-center gap-2.5">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.6665 8L11.8839 13.2226C15.282 15.148 16.7177 15.148 20.1158 13.2226L29.3332 8" stroke="#CF183C" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2.68753 17.9676C2.77469 22.055 2.81828 24.0986 4.32645 25.6126C5.83461 27.1265 7.93361 27.1792 12.1316 27.2846C14.7189 27.3497 17.2808 27.3497 19.8681 27.2846C24.0661 27.1792 26.165 27.1265 27.6733 25.6126C29.1814 24.0986 29.225 22.055 29.3121 17.9676C29.3402 16.6533 29.3402 15.3469 29.3121 14.0326C29.225 9.94523 29.1814 7.90154 27.6733 6.38763C26.165 4.87372 24.0661 4.82099 19.8681 4.71551C17.2808 4.6505 14.7189 4.6505 12.1316 4.7155C7.93361 4.82096 5.83461 4.8737 4.32644 6.38762C2.81826 7.90152 2.77469 9.94522 2.68752 14.0326C2.65949 15.3469 2.6595 16.6533 2.68753 17.9676Z" stroke="#CF183C" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <span className="text-white">Large parties &amp; private events</span>
                  <div className="self-stretch justify-start text-[#c0c0c0] text-base font-light font-['Outfit'] leading-[22.40px]">For groups of 15+ guests or private event inquiries, reach our events team directly.</div>
                  <a href={`mailto:${siteConfig.email}`} className="self-stretch justify-start text-[#ad6d25] text-base font-normal font-['Outfit'] underline leading-[22.40px]">{siteConfig.email}</a>
                </div>
              </div>
              <div className="self-stretch flex justify-start items-start gap-3">
                <div className="size-16 p-4 bg-white/5 rounded-lg outline outline-1 outline-white/10 flex justify-start items-center gap-2.5">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16C4 10.3431 4 7.51472 5.75736 5.75736C7.51472 4 10.3431 4 16 4C21.6568 4 24.4853 4 26.2427 5.75736C28 7.51472 28 10.3431 28 16C28 21.6568 28 24.4853 26.2427 26.2427C24.4853 28 21.6568 28 16 28C10.3431 28 7.51472 28 5.75736 26.2427C4 24.4853 4 21.6568 4 16Z" stroke="#CF183C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.3332 16.0001C21.3332 18.9455 18.9453 21.3334 15.9998 21.3334C13.0543 21.3334 10.6665 18.9455 10.6665 16.0001C10.6665 13.0546 13.0543 10.6667 15.9998 10.6667C18.9453 10.6667 21.3332 13.0546 21.3332 16.0001Z" stroke="#CF183C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.1665 9.00033H22.9998M23.3332 9.00033C23.3332 9.18443 23.1838 9.33366 22.9998 9.33366C22.8157 9.33366 22.6665 9.18443 22.6665 9.00033C22.6665 8.81623 22.8157 8.66699 22.9998 8.66699C23.1838 8.66699 23.3332 8.81623 23.3332 9.00033Z" stroke="#CF183C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <span className="text-white">Follow along</span>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="self-stretch justify-start text-[#ad6d25] text-base font-normal font-['Outfit'] underline leading-[22.40px]">@tokyosushispeakeasy</a>
                </div>
              </div>
              <div className="self-stretch flex justify-start items-center gap-3">
                <div className="size-16 p-4 bg-white/5 rounded-lg outline outline-1 outline-white/10 flex justify-start items-center gap-2.5">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9998 29.3334C23.3636 29.3334 29.3332 23.3638 29.3332 16.0001C29.3332 8.63628 23.3636 2.66675 15.9998 2.66675C8.63604 2.66675 2.6665 8.63628 2.6665 16.0001C2.6665 23.3638 8.63604 29.3334 15.9998 29.3334Z" stroke="#CF183C" strokeWidth="2" />
                    <path d="M16.0103 14.0109C14.9057 14.0109 14.0103 14.9064 14.0103 16.0109C14.0103 17.1155 14.9057 18.0109 16.0103 18.0109C17.1148 18.0109 18.0103 17.1155 18.0103 16.0109C18.0103 14.9064 17.1148 14.0109 16.0103 14.0109ZM16.0103 14.0109V9.33203M20.0195 20.0264L17.4213 17.4283" stroke="#CF183C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <span className="text-white">HOURS</span>
                  <div className="self-stretch justify-start text-[#c0c0c0] text-lg font-light font-['Outfit'] leading-[25.20px]">{siteConfig.hours}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-6 py-[49px] bg-white/5 rounded-2xl outline outline-1 outline-white/10 flex flex-col justify-start items-center gap-4 md:gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-8">
              <div className="self-stretch text-center justify-start text-white text-[32px] font-normal font-['Lora'] leading-[38.40px]">Drop a Message</div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch px-5 py-3.5 bg-white/5 rounded-2xl outline outline-1 outline-white/10 flex justify-start items-center gap-2.5">
                  <div className="flex-1 justify-start text-white/70 text-base font-light font-['Outfit'] leading-7 tracking-wide">Name</div>
                </div>
                <div className="self-stretch px-5 py-3.5 bg-white/5 rounded-2xl outline outline-1 outline-white/10 flex justify-start items-center gap-2.5">
                  <div className="flex-1 justify-start text-white/70 text-base font-light font-['Outfit'] leading-7 tracking-wide">Email</div>
                </div>
                <div className="self-stretch px-5 py-3.5 bg-white/5 rounded-2xl outline outline-1 outline-white/10 flex justify-start items-center gap-2.5">
                  <div className="flex-1 justify-start text-white/70 text-base font-light font-['Outfit'] leading-7 tracking-wide">Phone Number</div>
                </div>
                <div className="self-stretch px-5 py-3.5 bg-white/5 rounded-2xl outline outline-1 outline-white/10 flex justify-start items-center gap-2.5">
                  <div className="flex-1 justify-start text-white/70 text-lg font-light font-['Outfit'] leading-7 tracking-wide">Subject</div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="self-stretch h-40 p-5 bg-white/5 rounded-2xl outline outline-1 outline-white/10 flex justify-start items-start gap-2.5">
                  <div className="flex-1 justify-start text-white/70 text-base font-light font-['Outfit'] leading-7 tracking-wide">Application Details</div>
                </div>
              </div>
            </div>
            <a href={siteConfig.bookingUrl} className="self-stretch h-14 px-6 py-[17px] bg-[#ad6d25] flex justify-center items-center gap-2.5 btn-glow">
              <div className="justify-start text-black text-base font-normal font-['Outfit'] leading-[22.40px] tracking-[2.56px]">RESERVE A TABLE</div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4165 10H4.1665" stroke="black" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="black" strokeWidth="1.25" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollReveal>

      <CtaSection />
    </div>
  );
}