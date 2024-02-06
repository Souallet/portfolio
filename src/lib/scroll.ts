export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  window.scrollTo({
    top: (element?.offsetTop ?? 0) - 100,
    behavior: 'smooth',
  });
};
