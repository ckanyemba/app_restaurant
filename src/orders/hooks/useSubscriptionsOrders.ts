import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { Orders } from "../types/orders";
const url = "ws://localhost:4000/graphql";
import { addOne } from "../../@core/utils/crudUtils";
const useSubscription = () => {
  const queryClient = useQueryClient();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribingSuccess, setIsSubscribingSuccess] = useState(false);
  useEffect(() => {
    const ws = new WebSocket(url, "graphql-ws");

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "connection_init", payload: {} }));
      setIsSubscribing(true);
      ws.send(
        JSON.stringify({
          id: "1",
          type: "start",
          payload: {
            // variables: {},
            extensions: {},
            operationName: null,
            query: `subscription{
                OrdersCreated{
    status
    OrdersProduct{
      product_name
      product_price
      product_quantity
    }
    OrdersProductAttribute{
      product_options
      options_values_prices
    }
  }
            }`,
            variables: {},
          },
        }),
      );
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      //   console.log("Event Data" + JSON.stringify(msg));
      if (msg.type == "data") {
        setIsSubscribingSuccess(true);
        setIsSubscribing(false);

        const order = msg.payload.data.OrdersCreated;

        queryClient.setQueryData<Orders[]>(["Orders"], (oldOrders) =>
          addOne(oldOrders, order),
        );
      }
    };
    return () => {
      ws.send(JSON.stringify({ id: "1", type: "stop" }));
      ws.close();
    };
  }, []);
  return { isSubscribing, isSubscribingSuccess };
};

export { useSubscription };
