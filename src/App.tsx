import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const regExpName = /^[A-Za-zА-Яа-я\s'-]+$/;
  const regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regExpPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

  const confirmPassword = watch("password");

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg drop-shadow-md w-full max-w-md"
        >
          <div className="mb-4 focus:outline-none outline-none">
            <input
              {...register("name", { required: true, pattern: regExpName })}
              name="name"
              autoFocus
              type="text"
              placeholder="Имя"
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  ${
                errors.name ? "border-red-600 f" : "focus:ring-green-300"
              }`}
            />
            {errors.name && (
              <span className="text-red-500">* Неверное имя</span>
            )}
          </div>
          <div className="mb-4">
            <input
              {...register("email", { required: true, pattern: regExpEmail })}
              name="email"
              type="email"
              placeholder="Электронная почта"
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500">* Неверный email</span>
            )}
          </div>
          <div className="mb-4">
            <input
              {...register("password", {
                required: true,
                pattern: regExpPassword,
              })}
              name="password"
              type="password"
              placeholder="Пароль"
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <span className="text-red-500">* Неверный пароль</span>
            )}
          </div>
          <div className="mb-4">
            <input
              {...register("confirmPassword", {
                required: "* Подтвердите пароль",
                validate: (value) =>
                  value === confirmPassword || "* Пароли не совпадают",
              })}
              name="confirmPassword"
              type="password"
              placeholder="Подтвердите пароль"
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="split">
              <input
                {...register("checkbox", { required: true })}
                name="checkbox"
                id="split"
                type="checkbox"
                className={`h-4 w-4 text-green-300 focus:ring-green-300 ${
                  errors.checkbox ? "border-red-500" : ""
                }`}
              />
              {errors.checkbox && (
                <span className="text-red-500">* Необходимо принять</span>
              )}
              <span className="ml-2 cursor-pointer">Принятие условий</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition duration-200 cursor-pointer"
          >
            Отправить
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
