import { mount } from 'shop/ShopApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ cartMethods, cartItems }) => {
    const ref = useRef(null);
    const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      cartItems,
      cartMethods,
    });

        history.listen(onParentNavigate);
    }, []);
    return <div ref={ref} />;
};
