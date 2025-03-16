      let answer;
      let end = false;
      do {
        answer = +prompt(
          "1.\n2.\n3.\n4.\n5.\n6.\nCâu trả lời của bạn:"
        );
        if (isNaN(answer) || answer < 1 || answer > 6) {
          alert("Sai cu phap");
          continue;
        }
        switch (answer) {
          case 1:
            
          break;
          case 2:
            
          break;
          case 3:
            
          break;
          case 4:
            
          break;
          case 5:
            
          break;
          case 6:
            alert("Thoát chương trình.");
            end = true;
            break;
        }
      } while (!end);
    