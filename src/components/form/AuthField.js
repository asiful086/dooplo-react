import { useField, ErrorMessage } from "formik";

const AuthField = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          className={`input-field ${
            meta.touched && meta.error && "border-t border-danger"
          }`}
          {...field}
          {...props}
        />
      </div>
      <ErrorMessage component="div" name={field.name} className="text-danger" />
    </>
  );
};

export default AuthField;

// label
// type
// class
// id
// placeholder

// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api/*",
//     createProxyMiddleware({
//       target: "https://jsonplaceholder.typicode.com",
//       changeOrigin: true,
//     })
//   );
// };
