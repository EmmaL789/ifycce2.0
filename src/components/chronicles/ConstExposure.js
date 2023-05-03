import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import raychang from "../../images/chronicles/Ray_Chang.jpg";
import laptopanddesk from "../../images/chronicles/laptopanddesk.png";
import lightbulb from "../../images/chronicles/lightbulb.png";

class ConstExposure extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>Constant Exposure Leads to Right Direction</h1>
              <h6 className="authors">
                BY YUCONG YANG &middot; RACHEL CHEN &middot; RAY CHANG &middot;
                HARRY SIO
              </h6>
              <h6 className="date">Nov 20, 2020 &middot; 10 min read</h6>
            </Container>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={raychang}
                alt="Ray's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Ray Chang is a second-year bioengineering PhD student at
                    Stanford University studying the fluid mechanics of the
                    freshwater ciliate <i>Spirostomum ambiguum</i>. Before
                    starting his PhD at Stanford, Ray attended medical school
                    with an interest in becoming a psychiatrist but was drawn to
                    the excitement and innovation of research. He enjoys the
                    interdisciplinary nature of biophysics and the use of
                    physics to predict the limits of life. After completing his
                    PhD, Ray hopes to start a career in academia to discover new
                    knowledge on the microscopic world and to inspire others to
                    do the same.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      What are you doing now and what is your background?
                    </strong>
                  </h2>
                  <p>
                    Hi! I am Ray Chang and I am a second-year bioengineering PhD
                    student at Stanford. I am in Professor Manu Prakash’s lab,
                    and I am working on the fluid mechanics problem of an
                    interesting freshwater ciliate called 
                    <i>Spirostomum ambiguum</i> using both theoretical and
                    experimental approaches. To be more specific,{" "}
                    <i>Spirostomum</i> is a giant single cell organism (it can
                    grow up to 4 mm in length!) with an exceptional ability to
                    perform ultrafast contractions; the maximum acceleration in
                    the contraction process can be up to 15G! A normal human
                    cannot tolerate such high acceleration, but this organism
                    uses the hydrodynamic pulse wave generated by the
                    contraction as a communication tool and must be able to
                    perform such a task repetitively without damaging itself. I
                    am looking at the intracellular organization of this
                    organism to see how the internal structure helps dissipate
                    the energy generated in this process. 
                  </p>
                  <p className="text-center">
                    <iframe
                      title="spirosto"
                      src="//www.youtube.com/embed/aPy_8x182UA"
                      width="560"
                      height="314"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </p>
                  <p>
                    Aside from this project, I also play an assistant role in
                    other frugal science projects related to the medical field
                    in our lab because of my background in medicine. For
                    example, our lab is working on converting a
                    commercially-available snorkel mask into personal protective
                    equipment (PPE) for healthcare workers, or into an interface
                    for noninvasive ventilation. I have worked on designing PPE
                    donning, doffing and disinfection protocol, and some
                    physiological testing. This dual role is very common in our
                    lab: most of us work as the primary lead of our own project
                    but also have a supportive role for other members’ projects.
                  </p>
                  <p className="text-center">
                    <iframe
                      title="ambiguum"
                      src="//www.youtube.com/embed/--9LSS4dvmA"
                      width="560"
                      height="314"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </p>
                  <p>
                    In the long run, I am interested in pursuing an academic
                    career, with a potential focus on cellular biophysics. There
                    are many interesting problems in the unseen microscopic
                    world. For example, how does a single cell sustain its needs
                    when it grows to a large size? How does the cell transmit
                    signals across the cell without an action potential? Is it a
                    common strategy for cells to modify its internal structure
                    for energy dissipation purposes? These are all fundamental
                    questions which require careful experimental design from a
                    strong theoretical point of view, which is why I find them
                    so fascinating!
                  </p>
                  <h2>
                    <strong>Why do you do what you do now?</strong>
                  </h2>
                  <p>
                    This is an interesting question. I think the most important
                    reason why I am a researcher is because it is fun. It is fun
                    to ask these seemingly random questions which actually carry
                    serious fundamental meanings. It is fun to see what life
                    (other than model organisms) looks like and how they evolve
                    really fascinating strategies to tackle the problems unique
                    to their scale. If you want to learn more about how fun such
                    a world could be, I encourage you to explore a therapeutic
                    YouTube channel called “Journey to the Microcosmos”. While I
                    wanted to study biophysics in graduate school, I couldn’t
                    apply for a PhD in a biophysics program because of funding
                    issues surrounding my foreigner status. Instead, I was able
                    to apply for a bioengineering program because it provides a
                    more quantitative point of view compared to other branches
                    in bioscience. However, I think bioengineering is a good fit
                    for me as its fundamental research matches my interests
                    while its application matches my abilities.
                  </p>
                  <p>
                    One reason why I am currently aiming for an academic career
                    is because I enjoy teaching. I hope that a more quantitative
                    mindset can someday become the second “central dogma” in
                    biology: living organisms have to obey the laws of physics,
                    and these laws set a predictable constraint on what they can
                    do and how they can perform a specific task. In my 4th year
                    of medical school I started a blog called “Three Minute
                    Biophysics” to educate myself and others about both classic
                    and modern research in biophysics. I like to share with
                    other people joyful and insightful moments when physics and
                    biology marry together, and I think those tiny moments are
                    what motivate me to explore all the unanswered questions we
                    have about biology.
                  </p>
                  <p>
                    The other reason why I am considering an academic job is
                    because I appreciate the freedom of academia. I want to work
                    on something that I genuinely find interesting, even if its
                    application may not be evident at first glance. I believe
                    that only through studying these peculiar microorganisms can
                    we truly understand the limits of life and what a living
                    creature is capable of. Staying in academia after graduation
                    will allow me to continue studying unique microorganisms
                    that are seemingly unimportant but could provide novel
                    solutions to the problems we have today.
                  </p>
                  <h2>
                    <strong>How did you end up doing what you do now?</strong>
                  </h2>
                  <p>
                    I entered medical school after high school because I was not
                    sure about what I wanted to do. Even though I had been
                    thinking about doing research back then, I didn’t feel
                    passionate enough about pure biology research to major in
                    biology. I was also interested in physics but was not very
                    confident in my abilities to major in physics. During my
                    freshman year, I got really interested in psychology. I
                    spent all my free time voraciously reading all kinds of
                    psychology books and I thought I would one day become a
                    psychiatrist.
                  </p>
                  <p>
                    However, in my sophomore year, I felt that I had learned
                    enough psychology to interpret and handle my own personality
                    and interpersonal relationship problems, and psychology
                    became less interesting to me. I decided to take a
                    psychology and a physics elective at the same time to see
                    which one I enjoyed more. The physics class I took was
                    “Introduction to Biophysics” taught by Dr. Po-Ling Kuo, and
                    it completely changed my life. I was so inspired by how
                    physics can be used to predict a diverse range of biological
                    problems, and I really enjoyed the textbook, “Physical
                    Biology of the Cell” written by Rob Phillips. After chatting
                    with Dr. Kuo during an office hour about my interests in
                    pursuing biophysics, he invited me to join his lab and I
                    worked with him part time for 4 years.
                  </p>
                  <p>
                    After joining Dr. Kuo’s lab, I prepared myself for a career
                    in biophysics. I knew that my physics and math abilities
                    were not going to be as good as a physics major student, so
                    I devoted all my free time to self-studying physics and
                    math. I was very lucky to have a friend who was also
                    interested in physics and would study with me, and I miss
                    the times when he would message me with a question and ask
                    me to solve it. As medical school classes were quite heavy,
                    I had to stay in the library for the entire day and even on
                    weekends. Even though that may sound miserable, I
                    appreciated that time when I could enjoy the pure joy of
                    knowledge.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={lightbulb}
                      alt="Light bulb"
                    />
                  </div>
                  <br></br>
                  <p>
                    7 years of medical school was still a long journey and I had
                    questioned my decisions from time to time. Over the 7 years,
                    I thought about becoming a psychiatrist, nephrologist,
                    pathologist, cardiologist and neurologist at different
                    stages of my training while still doubting my abilities to
                    study physics. However, I am glad that constant exposure to
                    the inspiration of research helped me overcome my doubt and
                    pointed me in the direction I should go. When I would write
                    a new post for my blog introducing others’ great work, I
                    wished that I could become part of that community. I wished
                    I could try to explore my own limits, and to one day
                    introduce my own work on my blog! With that in mind, I
                    decided to apply for graduate school during my final
                    (internship) year in medical school.
                  </p>
                  <p>
                    In my intern year, I had more responsibilities taking care
                    of patients and needed to regularly stay on duty, which gave
                    me a chance to imagine what my life would be like if I
                    decided to stay in hospital work. I felt the need to
                    constantly engage in difficult conversations around patient
                    status and the uncertainty around staying on duty was
                    draining to me. Even though I performed very well during my
                    internship and received positive feedback from my senior
                    colleagues, I felt that I was giving the patients suboptimal
                    care because I was not the best possible “me”. In addition,
                    I realized that the emotional burden of working at a
                    hospital prevented me from maintaining my biophysics
                    studying hobby, which forced me to make a decision between
                    the two. Luckily, I got into Stanford with God’s help and my
                    past investment in applying for graduate school, and I
                    really appreciate the chance.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2 className="text-center">
                    <strong>Tips for College Students</strong>
                  </h2>
                  <p>
                    As a college student, the advice I would give is to explore
                    your interests and start preparing yourself early. I would
                    not have been admitted to graduate school if I only started
                    preparing for it in my 5th or 6th year of medical school.
                    Having a clear direction is more important than blindly
                    wasting your efforts. Spend your time exploring your
                    passions when the cost of failure is still low, really dive
                    into the one that you love, and plan early for your
                    long-term goals. I hope everyone can eventually work on
                    something they are passionate about!
                  </p>
                  <p>
                    Another thing that I found very helpful is to embrace a
                    growth mindset. Intelligence can be built and we should
                    believe in our abilities to learn. There is a stereotype
                    that students in biology or medicine are bad at math and
                    physics, and I think that is very toxic and detrimental. I
                    would not have the courage to apply to graduate school and
                    to work on my current project if I didn’t believe in my
                    ability to learn, and trust in yourself takes time and
                    effort to nurture.
                  </p>
                  <br></br>
                  <h2 className="text-center">
                    <strong>Tips for High School Students</strong>
                  </h2>
                  <p>
                    I was very lucky to have graduated from Taipei Municipal
                    Jianguo (former name Chien-Kuo) Senior High School, a high
                    school that gives its students more freedom than any other
                    high school. Every student is encouraged to do whatever they
                    want, and there is a strong atmosphere in the school that if
                    you want to do something, you should aim for the best.
                    Therefore, our high school is famous in almost every aspect:
                    from international science Olympiad, science fair, pop dance
                    club, rugby team, to color guard team, because everyone is
                    aiming for the best. I also remember when I had naturalist
                    hobbies such as plant identification, and I bought many
                    plant atlases just to study how to differentiate them. I
                    encourage everyone to be serious about the things you like,
                    and really invest time to do research on it and to practice
                    [what you learned].
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={laptopanddesk}
                      alt="Laptop and Desk"
                    />
                  </div>
                  <br></br>
                  <h2 className="text-center">
                    <strong>
                      Tips for People Interested in Medical School
                    </strong>
                  </h2>
                  <p>
                    I also have advice for people who are interested in medical
                    school. There are many aspects of medicine that are very
                    different from what ordinary people imagine a medical career
                    to be. Uncovering the mysteries of the human brain or
                    finding cures for cancer are not going to be a major part of
                    your training, and your hospital volunteering experiences
                    will be very different from a usual day as a healthcare
                    worker. A huge aspect of medicine is having to communicate
                    terrible news to an already shattered family. As you get
                    more and more accustomed to the practical know-how of taking
                    care of a patient, it is possible to become emotionally worn
                    out by seemingly trivial details that actually become huge
                    roadblocks to treatment flow, such as health insurance
                    status, bed availability of post-acute care facilities, or
                    missing family members who hold the power to make decisions
                    for a patient. Think carefully before you apply to medical
                    school, and remember to take care of yourself if you are
                    admitted.
                  </p>
                </Col>
                <Col md="2"></Col>
              </Row>
            </Container>
            <Container className="main-page text-center">
              <Button href="/chronicles" variant="info">
                All Chronicles
              </Button>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ConstExposure;
