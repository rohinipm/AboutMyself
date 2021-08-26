var readlineSync=require('readline-Sync');

console.log("\t\t Do you know about me (Rohini)");
console.log("\t\t-------------------------------");

var uname=readlineSync.question("May I know your name:");
console.log("Welcome "+uname);

var score=0;
function play(question,answer)
{
  var userresult=readlineSync.question(question);
  if(userresult==answer)
  {
    score=score+1;
    console.log("You are Correct \nScore is " +score);
  }
  else
  {
    console.log("You are Wrong \nScore is " +score);
  }
}


var questions=[
    {que : "\nWhere do I Live?\n1.Bangalore\n2.Tamilnadu\nAns(1or2):",
    ans : "1"},
    {que : "\nWho is favorite cricket star?\n1.Dhoni\n2.Kholi\nAns(1or2):",
    ans : "2"},
    {que : "\nI want to become?\n1.Developer\n2.player\nAns(1or2):",
    ans : "1"},
   {que : "\nMy favorite superhero?\n1.Superman\n2.Batman\nAns(1or2):",
    ans : "1"},
    {que : "\nMy favorite indoor game?\n1.Chess\n2.Carom\nAns(1or2):",
    ans : "2"},];

    for(var i=0;i<questions.length;i++)
   {
     var curqus=questions[i];
     play(curqus.que,curqus.ans);
   }
   
 