import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>This is the landing page</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo libero
      veritatis reiciendis modi dolor suscipit non. Quis obcaecati, quam vel,
      unde, dicta accusamus reiciendis quisquam dolor quia recusandae fuga ex.
      <div className="flex gap-10 items-center">
        <Link to="admin/login">
          <button className="px-8 py-2 bg-red-200 text-white">Admin</button>
        </Link>

        <Link to="marketer/login">
          <button className="px-8 py-2 bg-red-200 text-white">Marketer</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
