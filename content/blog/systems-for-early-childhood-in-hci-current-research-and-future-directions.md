---
title: "Systems for early childhood in HCI: Current research and future directions"
date: 2021-07-24T03:32:31.233Z
description: This post introduces several works in HCI that improve parenting
  and early childhood education.
author: Taeahn Kwon
draft: false
---
# Early childhood and technology

Early childhood (ages 0--8) is a period of rapid growth. It is within
this time, especially in one's earliest years, that neurodevelopment and
language acquisition occurs at a rate that is *never* repeated in the
rest of one's life. Consequently, education during early childhood
yields disproportionally large influences on one's life. For example, a
child's vocabulary at the age of three is one of the strongest
predictors of later academic performance, including the likelihood of
dropping out of high school \[Dickinson and Porche, 2011].
Moreover, in the case that a child shows early signs of a developmental
disorder, the earliest actions taken to intervene can make the largest
differences in their outcomes \[Goode et al., 2011].

Can technology play a role in early childhood education? Researchers in
diverse fields have explored this question. One line of work has, quite
intuitively, developed educational apps---apps containing games, videos,
and other content to be used as learning tools. But apps can only be
used by children old enough to use the digital devices that display
them---leaving out younger children in the "critical period" between 0
to 36 months in age where much of early education efforts are
concentrated in. Moreover, many studies have found negative effects of
digital devices on children's development
\[Madigan et al., 2019].

How, then, can we use technology to help these younger children? It is
hard to argue against the point that ideally, children should learn from
real-world, person-to-person interactions---maybe we should be asking
*is there room here for technology at all*? I believe that there
is---but it requires a change in paradigm. Several recent works in
Human-Computer Interaction (HCI) have taken a different approach: they
have chosen *parents and caregivers* instead as the targets for
guidance. In this post I highlight several works in this domain, and
hope to demonstrate the potential of such technology for education and
intervention efforts.

# TalkBetter (2014)

![TalkBetter overview](/images/talkbetter.png "TalkBetter")

One group that requires special care in their early years are children
affected by delayed language development, otherwise known as "late
talkers". Timely treatment of these children can significantly improve
their language development. The lack of such measures, on the other
hand, can lead to adolescent reading and learning disorders, as well as
problems in adulthood.

Traditional treatment takes on the form of sessions given by
professional speech language pathologists (therapists). Despite the
heaviness in the word "treatment", these sessions mostly consist of
playing, and serve to encourage the child to practice using language.
Hence it is easy to imagine that active play and interaction between the
child and parents at home plays a large role in language learning---and
studies have shown that this is indeed the case
\[Roberts and Kaiser, 2011].

TalkBetter \[Hwang et al., 2014] is a system designed for
parents to improve their language habits at home using just a mobile
device. The authors conduct extensive studies with speech language
pathologists in order to understand guidelines that parents should
follow at home in order to improve their child's progress.

In the process, they discover that many guidelines are independent of
the actual content of the dialogue (the semantics) but rather
"metalinguistic", a term that they use to describe prosodic and
turn-related elements. For example, one such guideline is "Wait for your
child to respond"; another is "Do not interrupt your child when they are
talking". These guidelines hold whether the topic of conversation is a
car or an apple. This was an important observation as understanding such
metalinguistics is a far easier task than comprehending dialogue.

Finally, the authors incorporate these guidelines in a mobile app. The
app processes speech to extract conversational turn information, and
feeds this data into a pattern-matching algorithm. In effect,
turn-related patterns such as "interrupting the child" or "not
responding to the child" can be detected in real-time. Finally, the app
intervenes in the play situation by giving advice through a bluetooth
earpiece: e.g.) "Please do not interrupt your child".

TalkBetter is a creative demonstration of how expert guidance can be
fused with the accessibility of mobile app. While the five guidelines
given may seem basic, they correct mistakes that parents habitually make
in their daily lives, and were carefully curated through user studies
with both parents and professional therapists.

![SpecialTime overview](/images/specialtime.png "SpecialTime")

# SpecialTime (2019)

SpecialTime \[Huber et al., 2019] is a more recent
system that seeks to improve early childhood experiences by targeting
parent habits. As we will see, its design follows a similar pattern to
TalkBetter: informed by existing guidelines concerning parent-child
interaction, the authors develop an app that automates the guidance
process.

In this case the guidelines concern Parent-Child Interaction Therapy
(PCIT). PCIT was designed for children with behavioral problems and
their parents. It consists of clinician-led therapy session where a
parent is given certain goals to meet while interacting with their
child. These goals are very clearly defined: the parent must include a
specified number of labeled praises (e.g., "You drew a beautiful
picture!"), reflections (e.g., Child: "Which car is the fastest?"
Parent: "You want to know which car is the fastest."), and other
positive dialogue acts throughout the interaction. Meanwhile, they must
also avoid negative acts such as commands and rude speech.

These dialogue acts are traditionally counted manually by the clinician.
The authors explore the idea of automating the process with an app that
classifies each sentence of the parent in real-time, thereby allowing
PCIT to be conveniently carried out at home. As the figure shows, the
user interface consists of a simple bar chart that shows the frequency
of each act, such as labeled praises. Hence, SpecialTime is a passive
personal informatics (PI) application, in contrast to TalkBetter which
is an active intervention. The downside of such passivity is that it
requires more proactive effort from the parent to alter habits; however,
it is less obtrusive and distracting as compared to a real-time
intervention.

![DyadicMirror overview](/images/dyadic-mirror.png "DyadicMirror")

# DyadicMirror (2020)

A third system designed to aid parenting is DyadicMirror
\[Kim et al., 2020]. To increase self-awareness during
parent-child interaction, the authors devise a remarkably simple
solution: a mirror. They hypothesized that simply being aware of one's
own face while interacting with the child can foster empathy,
reflection, and less impulsivity. Since an actual mirror far too
sensitive to the viewing angle, the authors developed a lightweight
device with a face-tracking camera and display.

A four-week deployment study showed impressive results. Parents reported
widely positive experiences on using the system, and recounted many
situations when DyadicMirror induced them to improve their parenting.
For example, a parent reflected that she was "shocked that I looked that
cold" when scolding their children. Other parents realized how often
they were preoccupied with their smartphones while their children
demanded attention. These reflections motivated the parents to actively
improve themselves: for example, a parent shared that "Now I do pay
attention to being warmer and smoother" to her child.

# Future directions

Looking at these systems, one might feel that they seem rather simple.
An app that detects when someone is interrupting their child. An app
that counts the number of praises and questions in a conversation. An
app that simply mirrors back one's own face. The simplicity in features
is partly driven by technical limitations: it is still an immensely
difficult task to "understand" interactions between people as humans do.
We can look at few seconds of a video clip featuring two people and form
an idea of their relationship, mood, and general gist of the
conversation. However, despite the astounding advances in AI and machine
learning over the years, current models can barely transcribe the words
that are spoken, let alone comprehensively understanding the interplay
between tone, facial expression, body language, surrounding context, and
high-level linguistic constructs such as humor and sarcasm, which we as
humans understand instinctively.

Yet these works demonstrate that even such simple applications can
greatly help parents and their children during early childhood. In fact,
the simplest ideas can have the greatest impact, as the case of
DyadicMirror shows. There are doubtlessly countless more ideas that can
target diverse facets of parenthood and early education; I believe that
current HCI research has explored only a fraction of possibilities. I
expect that many more creative works---from systems that leverage
state-of-the-art advances in AI, to simple mobile apps, will emerge to
make large impacts on early childhood experiences in the coming years.

# References

* \[Dickinson and Porche, 2011] Dickinson, D. K. and Porche, M. V. (2011). Relation between language experiences in preschool classrooms and children’s kindergarten and fourth-grade language and reading abilities. Child development, 82(3):870–886.
* \[Goode et al., 2011] Goode, S., Diefendorf, M., and Colgan, S. (2011). The importance of early intervention for infants and toddlers with disabilities and their families. The National Early Childhood Technical Assistance Center.
* \[Huber et al., 2019] Huber, B., Davis III, R. F., Cotter, A., Junkin, E., Yard, M., Shieber, S., Brestan-Knight, E., and Gajos, K. Z. (2019). Specialtime: Automatically detecting dialogue acts from speech to support parent-child interaction therapy. In Proceedings of the 13th EAI International Conference on Pervasive Computing Technologies for Healthcare, pages 139–148.
* \[Hwang et al., 2014] Hwang, I., Yoo, C., Hwang, C., Yim, D., Lee, Y., Min, C., Kim, J., and Song, J. (2014). Talkbetter: family-driven mobile intervention care for children with language delay. In Proceedings of the 17th ACM conference on Computer supported cooperative work & social computing, pages 1283–1296.
* \[Kim et al., 2020] Kim, W., Lee, S., Kim, S., Jo, S., Yoo, C., Hwang, I., Kang, S., and Song, J. (2020). Dyadic mirror: Everyday second-person live-view for empathetic reflection upon parent-child interaction. Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 4(3):1–29.
* \[Madigan et al., 2019] Madigan, S., Browne, D., Racine, N., Mori, C., and Tough, S. (2019). Association between screen time and children’s performance on a developmental screening test. JAMA pediatrics, 173(3):244–250.
* \[Roberts and Kaiser, 2011] Roberts, M. Y. and Kaiser, A. P. (2011). The effectiveness of parent-implemented language interventions: A meta-analysis.