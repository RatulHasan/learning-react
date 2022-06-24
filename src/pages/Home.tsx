import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import "todomvc-common/base.js";

import Input from "../components/Input";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <section className="todoapp">
      <Input />
      <Main />
      <Footer />
    </section>
  );
}

export default Home;
