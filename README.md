# CS445 - Collaborative Git

## Practice with all the local repository commands from the slides:
1. `git init`:![Screenshot 2022-04-26 143322](https://user-images.githubusercontent.com/73855281/165647242-bf7f4a8f-5edc-4889-becb-9b3c0a634819.png)

2. `git status`

3. `git diff`:![Screenshot 2022-04-26 143905](https://user-images.githubusercontent.com/73855281/165647269-cbb67f63-d5df-4027-a607-4f93079961eb.png)

4. Create `.gitignore` file, and notice how it works:![Screenshot 2022-04-26 144430](https://user-images.githubusercontent.com/73855281/165647425-dc07da5f-9198-4c46-82d5-c011058134e0.png)

5. `git add`:![Screenshot 2022-04-26 144749](https://user-images.githubusercontent.com/73855281/165647454-ce018403-6f74-4f72-bf0b-c97cfc4a0deb.png)

6. `git commit`
7. `git commit –amend` (updating the last commit):![Screenshot 2022-04-26 145042](https://user-images.githubusercontent.com/73855281/165647499-78d130bc-e5b9-47ee-9127-2bd61168c1ea.png)

8. `git log`:![Screenshot 2022-04-26 145742](https://user-images.githubusercontent.com/73855281/165647538-764bf286-c1e9-4e87-bb6d-128e00df75bf.png)

10. `git tag`:![Screenshot 2022-04-26 145912](https://user-images.githubusercontent.com/73855281/165647576-58d4c12b-f812-4bc6-ae9c-ed140a9798f1.png)

11. `git branch`:![Screenshot 2022-04-26 150106](https://user-images.githubusercontent.com/73855281/165647824-32045af7-498e-40db-a2a2-a8045f77dbc0.png)

12. `git checkout`:![Screenshot 2022-04-26 150224](https://user-images.githubusercontent.com/73855281/165647924-d74190b1-4138-4427-bff5-6268332f5c82.png)

13. `git merge`:![Screenshot 2022-04-26 150525](https://user-images.githubusercontent.com/73855281/165647963-d572d420-ec4c-4a7f-ac6f-256ca1fdcb48.png)

    1. Create a conflict and solve the conflict:![Screenshot 2022-04-26 150909](https://user-images.githubusercontent.com/73855281/165647983-26f3085f-233e-44cd-a434-65de632307f1.png)![Screenshot 2022-04-26 151003](https://user-images.githubusercontent.com/73855281/165648032-55256b3d-acf1-411a-9cf1-4372a1099656.png)

14. Undo changes from a certain commit `git revert`:![Screenshot 2022-04-26 151557](https://user-images.githubusercontent.com/73855281/165648057-af37b0a2-9031-43c2-8c4c-a1c2a76f21c5.png)![Screenshot 2022-04-26 151921](https://user-images.githubusercontent.com/73855281/165648091-d669be16-0e7b-4380-a60e-578bd15f663f.png)

15. Erase commits with `git reset`:![Screenshot 2022-04-26 152150](https://user-images.githubusercontent.com/73855281/165648099-859fc31d-4069-43f6-82fd-9ece0c105c54.png)
  
## Practice with all the remote repository commands from the slides:
1. Create a remote repository
2. `git clone`:![Screenshot 2022-04-26 152545](https://user-images.githubusercontent.com/73855281/165648160-e2cda5d7-4890-49f8-9429-6b0f2e16cb3e.png)

3. `git remote`:![Screenshot 2022-04-26 153323](https://user-images.githubusercontent.com/73855281/165648184-a5787614-335a-4daa-ad86-8ef99e301fbe.png)

4. `git push`:![Screenshot 2022-04-26 154639](https://user-images.githubusercontent.com/73855281/165648237-66377d7e-dc51-4b62-ad0a-2b80fa8510a2.png)

5. `git fetch`:![Screenshot 2022-04-26 195846](https://user-images.githubusercontent.com/73855281/165648403-71671f9c-95c3-4534-99c8-cf65cec45756.png)

6. `git pull`:![Screenshot 2022-04-26 155113](https://user-images.githubusercontent.com/73855281/165648259-2b7454c3-088d-4f12-b26e-d0d9424d0973.png)
  
## Practice with all the third party repositories commands from the slides:
Assume we are working with the following upstream: `https://github.com/bellaxing/cs445-labs`
1. Star the repository:![Screenshot 2022-04-26 155354](https://user-images.githubusercontent.com/73855281/165648288-20fc941e-4d4e-4c94-814e-74091bce6b79.png)

2. Watch the repository for any changes:![Screenshot 2022-04-26 155801](https://user-images.githubusercontent.com/73855281/165648303-3e926ac3-b5a3-488c-9382-e35b7ee49461.png)

3. Fork the repository:![Screenshot 2022-04-26 194719](https://user-images.githubusercontent.com/73855281/165648321-e9c8ecf3-c607-4694-aff3-ce3fef227375.png)

4. Clone your forked repository into your local machine:![Screenshot 2022-04-26 195354](https://user-images.githubusercontent.com/73855281/165648353-c1d1ee68-dff5-451c-979d-2de2246e9441.png)

5. Create a new topic branch using `studentId-studentName` format, For example: 610001-JohnSmith:![Screenshot 2022-04-27 144919](https://user-images.githubusercontent.com/73855281/165648490-e75164eb-bf54-47e2-bf3d-85d9a2b75b78.png)

6. Checkout your new branch:![Screenshot 2022-04-27 145138](https://user-images.githubusercontent.com/73855281/165648516-00aedc4b-1270-454c-867d-366d4caae20e.png)

7. Add a new file with your name, example: `hello.js`:![Screenshot 2022-04-27 145323](https://user-images.githubusercontent.com/73855281/165648529-a2589a1e-a927-49ab-93b4-afa04611c04f.png)

8. Commit the changes:![Screenshot 2022-04-27 145434](https://user-images.githubusercontent.com/73855281/165648545-dadae548-b2d6-484a-9e7b-de4e8338ad8e.png)

9. Merge your `studentId-studentName` branch with the main branch:![Screenshot 2022-04-27 145558](https://user-images.githubusercontent.com/73855281/165648562-6694eb7e-0a4a-4f50-b35b-0db0d65aa7f5.png)

11. Push your changes to the remote repo:![Screenshot 2022-04-27 182205](https://user-images.githubusercontent.com/73855281/165648588-89d35011-199b-4029-ae88-f34b4c3e6297.png)

12. Create a new Pull Request to the upstream repo:![Screenshot 2022-04-26 202043](https://user-images.githubusercontent.com/73855281/165648627-86576584-0faa-41e5-9693-887dc24990f3.png)

## Optional homework:
1. Create a remote repository
2. Create `README.md`
3. Add at least 5 markdown syntax (For example: Headers, Bold, Code, Unordered List, Links) [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Comments && Questions:
I done earlier this morning this assignment. But I accedently deleted repository and local repository too.
Is there any chance to recover both off them?


  
