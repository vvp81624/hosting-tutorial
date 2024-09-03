fetch("./Data.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Data File Not Found");
        }
        return response.json();
    })
    .then((data) => {
        document.getElementById("name").innerText = data.Name;
        document.getElementById("role").innerText = data.Role;
        document.getElementById("description").innerHTML = data.Description;
        const work1 = document.getElementsByClassName("work1");
        const work2 = document.getElementsByClassName("work2");
        const work3 = document.getElementsByClassName("work3");
        work1[0].innerHTML = data.Work1Title;
        work1[1].innerHTML = data.Work1Description;
        work2[0].innerHTML = data.Work2Title;
        work2[1].innerHTML = data.Work2Description;
        work3[0].innerHTML = data.Work3Title;
        work3[1].innerHTML = data.Work3Description;
        document.getElementsByClassName("Name")[0].innerHTML = data.Name;
        document.getElementsByClassName("bdate")[0].innerHTML = data.BirthDate;
        document.getElementsByClassName("email")[0].innerHTML = data.Email;
        document.getElementsByClassName("address")[0].innerHTML = data.Address;
        document.getElementsByClassName("number")[0].innerHTML = data.Number;
        document.getElementsByClassName("website")[0].innerHTML = data.Website;

        const skill1 = document.getElementsByClassName("skill1");
        const skill2 = document.getElementsByClassName("skill2");
        const skill3 = document.getElementsByClassName("skill3");

        skill1[0].innerHTML = data.Skill1[0];
        skill1[1].innerHTML = data.Skill1[1];
        skill1[2].style.width = data.Skill1[1];

        skill2[0].innerHTML = data.Skill2[0];
        skill2[1].innerHTML = data.Skill2[1];
        skill2[2].style.width = data.Skill2[1];

        skill3[0].innerHTML = data.Skill3[0];
        skill3[1].innerHTML = data.Skill3[1];
        skill3[2].style.width = data.Skill3[1];

        document.getElementById("fb").href = data.FaceBookLink;
        document.getElementById("li").href = data.LinkedInLink;
        document.getElementById("ins").href = data.InstagramLink;
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });
