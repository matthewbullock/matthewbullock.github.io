var winningconditions = function(id,activeclass)
{
var left =leftdiagonal(id);	
var haswon = haswon || checkWin(left)

var right=rightdiagonal(id);
 haswon= haswon || checkWin(right)

var col=columnvalues(id);
 haswon= haswon || checkWin(col)

var row=rowvalues(id);
 haswon= haswon || checkWin(row)	
console.log()
 if(haswon===true)
 {
 	//alert("u won")
 	alert(activeclass + " WON!!!");

 }
};

var leftdiagonal = function(id)
{

	var row=id[0];
	var col=id[1];
	var row1=row;
	var col1=col;

	while(row1>0&&col1>0)
	{
		row1--;
		col1--;
	}

	var row2=row;
	var col2=col;

	while(row2<5&&col2<5)
	{
		row2++;
		col2++;
	}
	
	var leftdiagonalList=[];
	var last=row2.toString()+col2.toString();
	var initial=row1.toString()+col1.toString();

	while(initial<last+1)
	{
			leftdiagonalList.push(initial);
			row1++;
			col1++;
			initial=row1.toString()+col1.toString();
	}
	return leftdiagonalList;
};


var rightdiagonal = function(id)
{	
	var row=id[0];
	var col=id[1];
	var row1=row;
	var col1=col;
	var rightdiagonalList=[];

	while(row1<5&&col1>0)
	{
		row1++;
		col1--;
	}
	
	var row2=row1;
	var col2=col1;
	var initial=row2.toString()+col2.toString();

	while(row2>=0&&col2<=5)
	{
		rightdiagonalList.push(initial);
		row2--;
		col2++;
		initial=row2.toString()+col2.toString();	
	}	
	return rightdiagonalList;
};


var columnvalues = function(id)
{	
	var row=id[0];
	var col=id[1];	
	var columnList=[];
	for(var r=0;r<6;r++ )
	{
		var columnid=r.toString()+col.toString();
		columnList.push(columnid);
		
	}	
	return columnList;
};


var rowvalues = function(id)
{	
	var row=id[0];
	var col=id[1];	
	var rowList=[];
	for(var c=0;c<6;c++ )
	{
		var rowid=row.toString()+c.toString();
		rowList.push(rowid);
		
	}	
	return rowList;
}


var checkWin = function(array) 
{
    var winningStreak = 1;

   	for(var i = 0;i <= array.length; i++)
  	{
  		var currentCellClass = "";
		if($("#"+array[i]).hasClass("player1"))
		{
			currentCellClass="player1";
		}
		else if($("#"+array[i]).hasClass("player2")) 
		{
			currentCellClass="player2";
		}

        if ($("#" + array[i+1]).hasClass(currentCellClass))
        {  
       		winningStreak++;       				
        } 
        else
        {
        	winningStreak = 1;
        }

        if(currentCellClass === "")
        {
        	winningStreak = 1;
        }

        if(winningStreak >= 4)
        {
        	return true;
        }
        
    }

	return false;
}

