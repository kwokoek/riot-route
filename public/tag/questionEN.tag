
<question>
  
  <div class='question_block'>
    <div class='question_item'>
      <h3>{ resource_file.question }</h3>
      <div class='answerBlock'>
        <button class="button buttonYes" onclick={save} value='yes') >{resource_file.yes}</button>
      </div>
      <div class='answerBlock'>
        <button class="button buttonNo" onclick={save} value='no'>{resource_file.no}</button>
      </div>
    </div>
  </div>

  <script>

    save(e) {
      console.log("Answered-"+e.currentTarget.value);
      riot.route("complete");
    }
    
  </script>

  <style scoped>
    :scope { font-size: xx-large; }

    h3 { 
      color: #333333
    }

    .question_block {
    }

    .question_item {
      background-color: rgb(255, 255, 255);
      padding: 2px 10 25px 25;
      margin: 12px;
    }


    .button {
      width:40%;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: x-large;
      margin: 4px 2px;
      -webkit-transition-duration: 0.4s; /* Safari */
      transition-duration: 0.4s;
      cursor: pointer;
    }

    .buttonYes {
      background-color: white;
      color: black;
      border: 3px solid #4CAF50;
    }

    .buttonYes:hover {
      background-color: #4CAF50;
      color: white;
    }

    .buttonNo {
      background-color: white;
      color: black;
      border: 3px solid #f44336;
    }

    .buttonNo:hover {
      background-color: #f44336;
      color: white;
    }

  </style>
</question>
