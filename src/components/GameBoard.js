import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container, GameCategory } from "components/StyledComponents";
import { fetchQuestions } from "reducers/game";
import { Logout } from "components/Logout"

export const GameBoard = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(store => store.user.accessToken)

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);
  
  return (
    <Container>
      {accessToken && <Logout />}
      <h1>Välj Spel</h1>
      <Link to="/task1">
        <GameCategory color="beige">Vatten</GameCategory>
      </Link>
      <Link to="/task2">
        <GameCategory color="red">Återvinning</GameCategory>
      </Link>
      <Link to="/task3">
        <GameCategory>Resande</GameCategory>
      </Link>
    </Container>
  );
};
