import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: siteConfig.links.youtubeChannel, label: "YouTube Channel" },
  { href: siteConfig.links.itch, label: "itch.io Page" },
  { href: siteConfig.links.kofi, label: "Ko-fi Support" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-soft)] bg-transparent pb-10 pt-12">
      <div className="garden-container">
        <div className="section-shell">
          <h2 className="text-2xl">Follow and Support</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            Thanks for spending time in this little digital garden. If you want to 
            check out some real plants, head over to the{" "}
            <Link href="/garden-journal" className="underline underline-offset-4">
              Garden Journal
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  link.label === "Ko-fi Support"
                    ? "garden-button-accent"
                    : "garden-button-secondary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            Copyright {currentYear} Garden Sim. Built with care by a gardener
            and solo developer.
          </p>
        </div>
      </div>
    </footer>
  );
}
