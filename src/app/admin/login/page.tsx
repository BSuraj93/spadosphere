import { loginAdmin } from "./actions";

type LoginPageProps = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const error = params?.error;

  return (
    <main className="cms-auth-shell">
      <section className="cms-auth-card">
        <div className="cms-auth-eyebrow">Spadosphere CMS</div>
        <h1 className="cms-auth-title">Admin login</h1>
        <p className="cms-auth-copy">
          Use your CMS credentials to continue to the protected admin area.
        </p>

        <form action={loginAdmin} className="cms-auth-form">
          <div className="cms-field">
            <label htmlFor="email" className="cms-label">
              Username
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="cms-input"
              placeholder="Enter admin username"
              required
            />
          </div>

          <div className="cms-field">
            <label htmlFor="password" className="cms-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="cms-input"
              placeholder="Enter password"
              required
            />
          </div>

          {error ? <p className="cms-form-error">{error}</p> : null}

          <button type="submit" className="cms-primary-btn">
            Login to CMS
          </button>
        </form>
      </section>
    </main>
  );
}