import { useState } from "react";
import "./App.css";
import { FormikContext } from "./components/Context";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import { useFormik } from "formik";

function App() {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const [page4, setPage4] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      services: [],
      budget: [],
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <FormikContext.Provider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        {page1 ? <Page1 showPage2={setPage2} hidePage1={setPage1} /> : ""}
        {page2 ? (
          <Page2
            hidePage2={setPage2}
            showPage3={setPage3}
            showPage1={setPage1}
          />
        ) : (
          ""
        )}
        {page3 ? (
          <Page3
            showPage2={setPage2}
            hidePage3={setPage3}
            showPage4={setPage4}
          />
        ) : (
          ""
        )}
        {page4 ? <Page4 showPage3={setPage3} hidePage4={setPage4} /> : ""}
      </form>
    </FormikContext.Provider>
  );
}

export default App;
