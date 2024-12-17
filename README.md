# 2024-2 오픈소스기반기초설계 4조 프로젝트
<table>
  <tr>
    <td style="vertical-align: middle; font-size: 35px; font-weight: bold;">
      <h4>한 눈에 보는 내 삶의 대시보드,</h4> <h1 style="color: #0074D9;">NEST</h1>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/8e088dd3-31bf-48d6-bdd4-85790bfe9eb8" alt="GIF 이미지">
    </td>
  </tr>
</table>

> **다양한 일을 해내야 하는 당신을 위해, 일상을 관리하는 새로운 방법**  
계획 오류는 필연적이니, 지속 가능하게 이어가도록 돕자!

## 1️⃣ 기능 소개
NEST는 바쁜 사람들이 스스로를 더 잘 이해하고, 지속가능한 삶을 구성 해나갈 수 있도록 돕는 서비스입니다.

이 서비스는 개인의 목표와 일정을 효율적으로 관리할 수 있는 기능을 제공하여,  
사용자들이 자신의 **시간과 에너지를 최적화**할 수 있도록 지원합니다.  
또한 하루하루의 **성과를 쉽게 추적**하고, 필요할 때마다 **조정**할 수 있는 유연성을 제공합니다.  
이를 통해 사용자는 자신에게 가장 중요한 것들에 집중하며, **균형 있는 삶**을 유지할 수 있게 됩니다.

## 2️⃣ 팀원 소개

| **이름**        | **이시하**                       | **안은소**                | **조영주**                  |
|-----------------|--------------------------------|--------------------------|----------------------------|
| **담당기능**    | 1. 컴포넌트 설계 및 구현       <br> 2. 프론트엔드 서버 배포 | 1. 디자인 시스템 구축            <br> 2. 프론트엔드 컴포넌트 설계 및 구현    | 1. 백엔드 RESTful API 설계 및 구현         <br> 2. 백엔드 서버 배포     |
| **이미지**      | ![leesiha](https://avatars.githubusercontent.com/u/66323295?v=4)                | ![eunsoA](https://avatars.githubusercontent.com/u/74090200?v=4)         | ![choyeongju](https://avatars.githubusercontent.com/u/128598386?v=4)    |
| **닉네임**      | [`leesiha`](https://github.com/leesiha)                       | [`eunsoA`](https://github.com/eunsoa/)                | [`choyeongju`](https://github.com/choyeongju)           |

---

## 3️⃣ 기존 서비스 문제 제기

| **항목**      | **장점**                                           | **단점**                                                   |
|---------------|---------------------------------------------------|----------------------------------------------------------|
| <img src="https://i.namu.wiki/i/4nQjNFOiAf6WrIzp4uAk7Jzkbx6V82MkTkNPyWq9uwBGjuR9xN4TGbaMRg3akWxTBWqo_Gder6B_JSt0ZXImZg.webp" width="64" height="64"> <br> **투두메이트** | - 친구들과 함께하며 동기부여가 된다.<br>- 일상 공유를 위한 SNS 기능 제공. | - 하루 단위로만 Task를 관리한다.<br>- 진행 중인 일 표시가 어렵다.<br>- 과거 기록을 돌아보기 어렵다. |
| <img src="https://help.apple.com/assets/65DFA91B9E3ABE5AF306648B/65DFA91D9E3ABE5AF3066491/ko_KR/de7022b37872b74f3f3286acec4cc3c4.png" width="64" height="64"> <br> **미리알림**   | - 기본 앱이라서 다른 시스템과 연동이 잘 된다.          | - 진행 중인 일과 안 한 일 구분이 어렵다.<br>- 작성 전 머릿속에서 먼저 정리해야 하는 불편함이 있다. |
| <img src="https://www.venturesquare.net/wp-content/uploads/2020/06/notion.png" width="64" height="64"> <br> **노션**       | - 다양한 기능으로 할 일을 자유롭게 정리할 수 있다.<br>- 웹과 앱에 구애받지 않고 사용할 수 있다. | - 일정 관리가 메인 기능이 아니다.<br>- 메모장처럼 사용되며 Task 활용도가 낮다.               |

![image](https://github.com/user-attachments/assets/767a1d81-69e4-4f04-bec9-f1bc588129f2)

### 오늘에만 초점  

기존 ToDo 서비스들은 주로 ‘오늘 해야 할 일’에만 집중합니다. 사용자가 오늘 하지 않을 일이더라도, 일단 적어두는 용도(메모장)로 전락할 수 있습니다.

➡️ 실질적으로 해야 할 일을 제대로 관리하지 못할 가능성

### 할 일 상태 구체화 부족  

기존의 서비스들은 할 일이 미완료 상태에서 완료 상태로 넘어가는 단순한 구조를 가지고 있어, 진행 상태를 명확히 파악하기 어렵습니다.

➡️  사용자가 할 일의 진행 상황을 더 세분화하여 추적할 수 있는 기능이 필요

---

## 4️⃣ NEST 서비스 소개

<table>
  <tr>
    <td style="width: 100%;">
      <img src="https://github.com/user-attachments/assets/587842c0-7f29-4483-8a9c-ba24bd6a0a36" alt="PAGE21">
    </td>
  </tr>
  <tr>
     <td style="vertical-align: middle; font-size: 16px;">
      <h3>쏟아내기 영역</h3>  
      <p>‘쏟아내기 영역’에서 ‘오늘 영역’으로 이동하면서 할 일을 추가하게 됩니다. 이 과정에서 자연스럽게 오늘 무엇을 먼저 해야 할지 생각하게 됩니다.</p>
    </td>
  </tr>
  
  <tr>
    <td style="width: 100%;">
      <img src="https://github.com/user-attachments/assets/a0f87f09-46e6-40bb-bc13-21b7d01c2a52" alt="PAGE22">
    </td>
  </tr>
  <tr>
    <td style="vertical-align: middle; font-size: 16px;">
      <h3>할당(Assign)하는 형식의 UX - 드래그앤드랍</h3>  
      <p>할 일을 '오늘 영역'으로 쉽게 옮길 수 있으며, 이를 통해 사용자는 직관적으로 우선순위를 정할 수 있습니다. 이 기능은 사용자가 어떤 일을 먼저 처리할지를 명확히 하고, 일의 중요도에 따라 효율적으로 관리할 수 있게 도와줍니다.</p>
      <p>
      사용자는 단순히 리스트에 할 일을 나열하는 것을 넘어, 보다 체계적으로 자신의 업무를 관리하며, 필요한 경우에는 즉시 수정할 수 있는 유연성을 제공합니다. 이를 통해 NEST는 사용자의 일상과 목표를 보다 효과적으로 지원하며, 균형 잡힌 삶을 추구할 수 있게 합니다.</p>
    </td>
  </tr>
  
  <tr>
    <td style="width: 100%;">
      <img src="https://github.com/user-attachments/assets/82e11e85-9898-4bd9-bf37-9267c37da4e9" alt="PAGE23">
    </td>
  </tr>
  <tr>
    <td style="vertical-align: middle; font-size: 16px;">
      <h3>할당(Assign)하는 형식의 UX - 타임블로킹</h3>  
      <p>‘오늘 영역’에는 오늘 수행할 작업이 포함되어 있으며, 이를 구체적인 시간에 배치하는 ‘타임블로킹’도 가능합니다.</p>
      <p>타임블로킹이 왜 필요할까요?
      -> 내가 어떤 일에 얼마나 시간을 투자했는지를 정확히 알고 있어야 실행 가능한 계획을 세울 수 있으며, 성공 확률도 높아집니다.</p>
    </td>
  </tr>
  
  <tr>
    <td style="width: 100%;">
      <img src="https://github.com/user-attachments/assets/42602458-2dbe-49ca-a15d-f622f8cfc9d0" alt="PAGE25">
    </td>
  </tr>
  <tr>
    <td style="vertical-align: middle; font-size: 16px;">
      <h3>명료한 할 일 상태 1</h3>  
      <p>NEST는 보다 세분화된 작업 상태를 제공합니다. 미완료(ToDo)와 완료(Done) 외에도 진행 중(In Progress) 및 지연(Deferred) 상태를 추가로 제공합니다.</p>
    </td>
  </tr>
  
  <tr>
    <td style="width: 100%;">
      <img src="https://github.com/user-attachments/assets/1a6c75b8-f48c-4f14-b76e-94485324357d" alt="PAGE26">
    </td>
  </tr>
  <tr>
    <td style="vertical-align: middle; font-size: 16px;">
      <h3>명료한 할 일 상태 2</h3>  
      <p>사용자는 할 일의 상태를 직관적으로 파악할 수 있으며, 이를 통해 자신의 업무를 보다 체계적으로 관리할 수 있습니다.</p>
    </td>
  </tr>
  
  <tr>
    <td style="width: 100%;">
      <img src="https://github.com/user-attachments/assets/8e707501-ce52-4582-b563-84f70f7874aa" alt="PAGE28">
    </td>
  </tr>
  <tr>
    <td style="vertical-align: middle; font-size: 16px;">
      <h3>능률의 시각화</h3>  
      <p>NEST는 새로운 계획을 세우고, 삶을 이해하는 데 도움이 되는 유용한 인사이트를 제공합니다. 
      내가 생각했던 것보다 얼마나 많은 업무를 할당받았는지, 평소에 동시에 얼마나 많은 일을 진행했는지에 대한 통계를 대시보드에서 확인할 수 있습니다.
      즉, 내 삶의 KPI를 한눈에 볼 수 있는 것입니다.</p>
    </td>
  </tr>  
</table>

## 5️⃣ 기대효과
![기대효과](https://github.com/user-attachments/assets/090e9560-8853-4007-b076-43ed330aa0fb)
### NEST는 단순한 일정 관리 도구를 넘어서, 사용자 삶의 조화로운 발전을 위한 진정한 동반자가 될 것입니다. 
NEST는 사용자가 일상을 보다 효율적으로 관리하고 목표를 달성할 수 있도록 지원합니다. 사용자는 자신의 시간과 에너지를 최적화하여 균형 잡힌 삶을 유지합니다.
매일의 성공을 눈으로 확인할 수 있도록 도와주며, 지속적인 자기 개선을 위한 동기를 부여합니다. 장기적인 목표에 대한 명확한 비전을 유지하고, 개인적인 성취감을 쌓아갈 수 있습니다.

<div align="center">

# 🐣 NEST-FE 🐣

```
    NEST FrontEnd 레포입니다.

```

</div>

## ⚒️ 기술 스택

<table>
      <tr align="center">
       <td>Category<br/>
      </td>
       <td>Stack<br/>
      </td>
      </td>
    </tr>
    <tr align="center">
       <td>Package Manager<br/>
      </td>
       <td><img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white"><br/>
      </td>
    </tr>
      <tr align="center">
       <td>Language<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"><br/>
      </td>
    </tr>
        <tr align="center">
       <td>Build<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"><br/>
      </td>
    </tr>
        <tr align="center">
       <td>Framework<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"><br/>
      </td>
    </tr>
          <tr align="center">
       <td>Style<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/emotion-3776AB?style=for-the-badge&logo=emotion&logoColor=white"><br/>
      </td>
    </tr>
              <tr align="center">
       <td>Data Fetching<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white">
         <img src="https://img.shields.io/badge/axios-3776AB?style=for-the-badge&logo=axios&logoColor=white">
      </td>
    </tr>
              <tr align="center">
       <td>Formatting<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white">
        <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
         <img src="https://img.shields.io/badge/stylelint-000?style=for-the-badge&logo=stylelint&logoColor=white">
      </td>
    </tr>
</table>

  
## 📄 컨벤션 및 브랜치 전략

<h3>Commit Convention</h3>

```
- init: 초기 세팅
- feat: 새로운 기능 추가 (새로운 구현) 
- fix: 버그 수정 
- docs: 문서 추가, 수정, 삭제 
- style: UI 디자인 변경  
- refactor: 코드 리팩토링 
- chore: 그 외 자잘한 수정, 코드 포맷팅(코드 순서 변경, 세미콜론 추가) (주석 삭제)
```

<h3>Issue / Pull Request Convention</h3>

```
[종류] 작업 이름
ex) [FEAT] 회원가입 구현 및 이메일 본인인증, 비밀번호 찾기
```
`담당자`, `라벨` 추가하기

<h3>Git Branch</h3>

GitHub-flow 전략을 사용





<img width="271" alt="스크린샷 2024-07-05 오후 2 30 02" src="https://github.com/user-attachments/assets/a0fedf45-de2a-4223-9b8a-4489f540cb04">

```
- main : 배포용
- develop : 작업용
- feature : feature/#{issue-number}/{feature-name}
- fix : fix/#{issue-number}/{feature-name}
```

## 📁 폴더 구조

개발 완료 후 추가 예정입니다.
