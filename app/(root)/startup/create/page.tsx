import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

async function CreateStartupPage() {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }

  return (
    <>
      <section className="pink_container !main-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>

      <StartupForm />
    </>
  );
}
export default CreateStartupPage;
