import { CampaignNav } from "@/components/layout/CampaignNav";
import { Footer } from "@/components/layout/Footer";

// Same ISR window as the (site) segment — content comes from Supabase.
export const revalidate = 60;

export default function CampaignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-shell pb-28">
      {children}
      <Footer />
      <CampaignNav />
    </div>
  );
}
