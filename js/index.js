$(document).ready(function() { //INITIAL FUNCTION OF DOCUMENT
	$.ajax({ //INTIAL RANDOM QUOTE 
		url:
			"https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
		success: function(data) {
			var post = data.shift(); // The data is an array of posts. Grab the first one.
			$("#auth").text(post.title);
			$("#quote").html(post.content);
		},
		cache: false
	});
	$("#new-quote").on("click", function() { //ON CLICK
		$.ajax({
			url:
				"https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
			success: function(data) {
				var post = data.shift(); // The data is an array of posts. Grab the first one.
				$("#auth").text(post.title);
				$("#quote").html(post.content);
			},
			cache: false
		});
	});
				var b = document.getElementById('tweet'); //or grab it by tagname etc
				b.href = "https://twitter.com/intent/tweet?text=copy%20and%20paste%20the%20tweet";
				b.target = "_blank";
});