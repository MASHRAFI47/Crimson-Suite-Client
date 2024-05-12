import Swal from "sweetalert2";

const Newsletter = () => {
    const handleNewsletter = () => {
        Swal.fire({
            title: "Submit your Github username",
            input: "text",
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Look up",
            showLoaderOnConfirm: true,
            preConfirm: async (login) => {
              try {
                const githubUrl = `
                  https://api.github.com/users/${login}
                `;
                const response = await fetch(githubUrl);
                if (!response.ok) {
                  return Swal.showValidationMessage(`
                    ${JSON.stringify(await response.json())}
                  `);
                }
                return response.json();
              } catch (error) {
                Swal.showValidationMessage(`
                  Request failed: ${error}
                `);
              }
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
              });
            }
          });
    }
  return (
    <section>
        <div className="bg-orange-400 h-[15rem] flex justify-center items-center">
            <button onClick={handleNewsletter} className="btn btn-primary">Subscribe to Newsletter</button>
        </div>
    </section>
  )
}

export default Newsletter