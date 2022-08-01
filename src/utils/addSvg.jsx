const addSvg = (elem) => {
  if (elem === 'Вверх') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
        <path d="m7.293 11.293 1.414 1.414L11 10.414V16h2v-5.586l2.293 2.293 1.414-1.414L12 6.586l-4.707 4.707z" />
      </svg>
    );
  }
  if (elem === 'Вниз') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
        <path d="M13 13.586V8h-2v5.586l-2.293-2.293-1.414 1.414L12 17.414l4.707-4.707-1.414-1.414L13 13.586z" />
      </svg>
    );
  }
  if (elem === 'Влево') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
        <path d="m12.707 8.707-1.414-1.414L6.586 12l4.707 4.707 1.414-1.414L10.414 13H16v-2h-5.586l2.293-2.293z" />
      </svg>
    );
  }
  if (elem === 'Вправо') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
        <path d="M11.293 8.707 13.586 11H8v2h5.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z" />
      </svg>
    );
  }
};

export default addSvg;