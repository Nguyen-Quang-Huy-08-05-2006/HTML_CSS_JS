const inputElement = document.querySelector('#form-input');
      const formElement = document.querySelector('#form');
      const jobLocals =JSON.parse(localStorage.getItem('jobs') ) || [];
      console.log("jobLocals", jobLocals);

      //Lang nghe su kien submit form
      formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputValue = inputElement.value.trim();
        if(!inputValue) {
          alert('Vui long nhap cong viec');
          return;
        }
        const job = {
            id : Math.ceil(Math.random() * 10000),
            jobName: inputValue,
            status: false,
        }
        jobLocals.push(job);
        localStorage.setItem('jobs', JSON.stringify(job));
        inputElement.value = '';

      });
      function renderData(){
        const jobHtmls = jobLocals.map((job)=>{
            return "li" + job.jobName + "</li>";
        });
        const convertArrayToString = jobHtmls.join('');
      }
