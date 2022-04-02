import { useEffect } from "react";
import { Router } from "next/router";
import useRequest from "../../hooks/use-request";

const signout = () => {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/')
  });

  useEffect( () => {
    doRequest();
  }, []);

  return <div>Signing Out ...</div>
}

export default signout;