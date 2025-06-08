/* 
the below code will change the content on the about page based on the button 
clicked 
*/

// event listeners
document.getElementById("about-1").addEventListener("click", changeContent_1);
document.getElementById("about-2").addEventListener("click", changeContent_2);
document.getElementById("about-3").addEventListener("click", changeContent_3);
document.getElementById("about-4").addEventListener("click", changeContent_4);


//content variables
var about_1 = `<p class="">
    For many new parents, the quest for a good night's sleep can feel elusive. 
    While traditional sleep training methods often focus on behavioral 
    techniques, a growing number are turning to holistic infant sleep therapy, 
    an approach that considers the baby's entire well-being physical, 
    emotional, and developmental as well as the family's unique dynamics.
    </p>
    <p class="">
    Unlike one-size-fits-all solutions, holistic sleep therapy recognizes that 
    every baby is different and that sleep challenges can stem from a variety 
    of interconnected factors. It's not about "crying it out" or strict 
    schedules, but rather about understanding the root causes of sleep 
    difficulties and gently guiding both baby and parents towards more 
    restful nights.
    </p>`

var about_2 = `<table class ="">
        <tbody>
        <tr>
            <th>Attachment-Centered: </th>
            <td>Prioritising the secure attachment between parent and child</td>
        </tr>
        <tr>
            <th>Developmentally Appropriate: </th>
            <td>Understanding a baby's unique developmental stage</td>
        </tr>
        <tr>
            <th>Addressing Root Causes: </th>
            <td>Looking for underlying issues that might be disrupting sleep</td>
        </tr>
        <tr>
            <th>Physical discomfort: </th>
            <td>Reflux, allergies, trapped gas, teething</td>
        </tr>
        <tr>
            <th>Environmental factors: </th>
            <td>Room temperature, light, noise, uncomfortable sleep surface</td>
        </tr>
        <tr>
            <th>Routine and Rhythm:</th>
            <td>Inconsistent daytime sleep, overstimulation before bed, or lack of a calming bedtime routine.</td>
        </tr>
        <tr>
            <th>Temperament:</th>
            <td>Some babies are naturally more sensitive or have higher sleep needs than others</td>
        </tr>
        <tr>
            <th>Parental stress and anxiety: </th>
            <td>A parent's emotional state can significantly impact a baby's sleep</td>
        </tr>
        <tr>
            <th>Gentle and Respectful Methods: </th>
            <td>Focus on gradual changes, gentle guidance, and responsive parenting techniques</td>
        </tr>
        <tr>
            <th>Parent Empowerment: </th>
            <td>Equip parents with the knowledge and tools to understand their baby's sleep cues</td>
        </tr>
        <tr>
            <th>Individualized Plans: </th>
            <td>Plans are tailored to each family's values, lifestyle, and the baby's specific needs</td>
        </tr>
        </tbody>
    </table>`

var about_3 = `<table class ="">
        <tbody>
        <tr>
            <th>In-depth Intake: </th>
            <td>A thorough discussion about the baby's health history, feeding, daily routines, sleep environment, and family dynamics.</td>
        </tr>
        <tr>
            <th>Sleep Journal Analysis: </th>
            <td>Reviewing a detailed sleep log to identify patterns and potential triggers.</td>
        </tr>
        <tr>
            <th>Education and Guidance: </th>
            <td>Providing parents with information about infant sleep science, developmental stages, and responsive parenting techniques.</td>
        </tr>
        <tr>
            <th>Personalized Strategies: </th>
            <td>developing a plan to optimise the sleep environment, establish nap, feeding, and bedtime routines</td>
        </tr>
        <tr>
            <th>Ongoing Support: </th>
            <td>Providing follow-up consultations and encouragement as families implement changes.</td>
        </tr>
        </tbody>
    </table>`

var about_4 = `<ul class="list-about centre">
    <li>Sustainable Sleep Solutions</li>
    <li>Stronger Parent-Child Bond</li>
    <li>Reduced Parental Stress</li>
    <li>Improved Overall Family Well-being</li>

    </ul>
    <br/>
    <p class="left-align">
    If you're struggling with infant sleep and seeking a compassionate, 
    individualized, and gentle approach, exploring holistic infant sleep 
    therapy might be the supportive path you and your little one need to find 
    peaceful nights.
    </p>`

function changeContent_1 () {
    document.getElementById("sub-header").innerHTML = "Nurturing Rest for Your Little One";
    document.getElementById("content").innerHTML = about_1;
    // update the description meta tag
    updateMetaDesc("Holistic Infant Sleep Therapy");
}

function changeContent_2 () {
    document.getElementById("sub-header").innerHTML = "Key Principles of Holistic Infant Sleep Therapy";
    document.getElementById("content").innerHTML = about_2;
    // update the description meta tag
    updateMetaDesc("Holistic Infant Sleep Therapy - Principles");
    
}

function changeContent_3 () {
    document.getElementById("sub-header").innerHTML = "How Will it Go";
    document.getElementById("content").innerHTML = about_3;
    // update the description meta tag
    updateMetaDesc("Holistic Infant Sleep Therapy - What's Involved");
}

function changeContent_4 () {
    document.getElementById("sub-header").innerHTML = "Benefits of a Holistic Approach";
    document.getElementById("content").innerHTML = about_4;
    // update the description meta tag
    updateMetaDesc("Holistic Infant Sleep Therapy - Benefits");
}

function updateMetaDesc(newDesc) {
    // function to update the description meta tag for SEO
    let meta = document.querySelector("meta[name='description']");
    if (meta) {
        meta.setAttribute('content', newDesc)
    }
}