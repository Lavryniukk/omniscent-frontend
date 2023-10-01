import { useRouter } from "next/router";
let Handle = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query.code);
};
export default Handle;
