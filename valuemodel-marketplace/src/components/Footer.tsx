export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold">ValuModel Pro</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Premium downloadable valuation templates for finance professionals worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Email: support@valuemodelpro.com
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400">
          <p>© 2026 ValuModel Pro. Built with ❤️ for finance professionals.</p>
        </div>
      </div>
    </footer>
  );
}
