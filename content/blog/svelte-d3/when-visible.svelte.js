/** @param {(visible: boolean) => void} callback */
export function whenVisible(callback) {
  return (element) => {
    const observer = new IntersectionObserver((entries) => {
      callback(entries[0].isIntersecting);

      if (entries[0].isIntersecting) {
        observer.unobserve(element);
      }
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  };
}
