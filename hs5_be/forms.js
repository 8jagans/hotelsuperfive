const backend=()=>{
      axios.post("http://localhost:3001/insert",{total:this.state.total+this.state.sum}).then(()=>{
        console.log("data goes to backend");
      });
    }