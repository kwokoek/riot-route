
<header>
  <div class='header_top'>
    <div class='header_top_logo'>
      <img src="img/way.jpeg" class="header_top_img" />
    </div>
    <div class="language_block">
      <select id="language_selector" onchange={languageChanged}>
        <option  each={ languages.options } selected="{code == resource_file.lang_code}" value="{code}">{title}</option>
      </select>
    </div>
  </div>

  <script>

  languageChanged(e) {
    // notify parent of resource file load change
    loadResourceFile(e.target.value);
  }
    
  </script>

  <style scoped>
    .header_top {
      background-color: rgb(255, 255, 255);
      text-align: left;
      border-bottom: 3px solid #c1c1c1;
      top: 12px;
      padding: .8em 2em;
      height:60px;
    }

    .header_top_logo {
      float:left;
    }

    .header_top_img {
      max-width: 85px;
    
    }

    #language_selector {
      float: right;
      background: #fff;
      color: #000;
      width: 14em;
      border: thin solid #6d6d6d;
      font-size: 16px;
      height: 2em;
      box-shadow: 2px 2px 2px #b9b9b9;
    }

    #language_selector:hover {
      border: 3px solid #03A9F4;
    }
    
  </style>
</header>
