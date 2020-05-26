import React from "react";
import Style from "style-it";

class ToastLoading extends React.Component {
  render() {
    const styles = `
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(90vh - 5rem);
    }

    .loader {
        border: 1rem solid var(--toast-neutral-6);
        border-radius: 50%;
        border-top: 1rem solid var(--toast-blue-2);
        border-top-radius: 1rem;
        width: 7.5rem;
        height: 7.5rem;
        animation: spin 1.5s linear infinite;
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="wrapper">
        <div className="loader"></div>
      </div>
    );
  }
}
export default ToastLoading;
