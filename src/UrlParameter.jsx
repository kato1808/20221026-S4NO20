import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // const location = useLocation();
  // console.log(location);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは　{id} です</p>
    </div>
  );
};
