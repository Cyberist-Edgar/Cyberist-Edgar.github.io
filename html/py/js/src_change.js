function change(flag) {
    var frame = document.getElementsByTagName("iframe")[0];

    var src_list = ['Python-Introduction.html', 'Python-installation.html', 'Python-Editor.html', 'Python-Variables.html', 'Python-Condition.html', 'Python-Loop.html', 'Python-Logic.html', 'Python-Function.html'];

    len = src_list.length;
    pattern = /\/py\/(.*?\.html)/;
    result = pattern.exec(frame.src);
    index = src_list.lastIndexOf(result[1]);

    if (flag) { // previous
        if (index == 0) {
            frame.src = src_list[0];
        } else {
            frame.src = src_list[index - 1];

        }
    } else { //  next
        if (index == len - 1) {
            frame.src = src_list[len - 1];

        } else {
            frame.src = src_list[index + 1];

        }
    }

    function get_title(src) {
        let title = src_list[index + 1].slice(0, src_list[index + 1].indexOf("."));
        return title;
    }

    var previous = document.getElementsByClassName("previous")[0];
    var next = document.getElementsByClassName("next")[0]

    if (flag) { // previous

        if (index - 1 > 0) {
            console.log(index)
            previous.title = src_list[index - 2];
        } else {
            previous.title = "None";
        }
        next.title = src_list[index];
    } else {
        if (index + 2 < len) {
            next.title = src_list[index + 2]
        } else {
            next.title = "None"
        }
        previous.title = src_list[index];
    }
}
