import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const WhatYouNeedToDo = () => {
  return (
    <View style={styles.screen}>
    
    <ScrollView  contentContainerStyle={styles.scroll}>
        <View style={styles.banner}>
            <Text style={styles.bannerText}>What you need to know and do</Text>
        </View>

        <Text style={styles.header1}>We would like to welcome you to 
          Franklin Hospital. We are here to look
          after you and your family/whanau.</Text>

          <Text style={styles.text1}>This information sheet provides you with everything
          you need to know prior to and during your admission,
          preparing to go home and following your discharge.</Text>

          <Text style={styles.text1}>On this information page we will refer to your
          surgery as a 'procedure'</Text>

          <View style={styles.header}>
        <Text style={styles.headerText}> 1 | Before you come to Franklin Hospital</Text>
        </View>

        <Text style={styles.header1}>Please complete the 'Forms to fill out'</Text>

        <Text style={styles.text1}>We need to receive all three forms at least 1 week prior to your planned admission. This
        can be done via email, post or can be dropped off at the hospital reception. Contact details can be found in your admission pack.</Text>

        <Text style={styles.textBold}>On receipt your forms will be reviewed by a member of the team. We will contact you:</Text>

        <Text style={styles.text1}>● If we need more information about your health, additional documents (such as power
        of attorney documents for personal care and welfare).
      </Text>

      <Text style={styles.text1}>● To arrange an appointment to prepare you for your admission.</Text>

        <Text style={styles.text1}>If your child is having
          surgery look for this
          icon for additional
          information.</Text>
          
          <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.header1}>A checklist to confirm with your surgeon</Text>

          <Text style={styles.text1}>- That you understand the details of your procedure (so you can provide your informed consent)</Text>

          <Text style={styles.text1}>- If you need any further tests or blood clot treatment prior to admission.</Text>

          <Text style={styles.text1}>- Which of your regular medications (such as blood thinning medications), remedies or supplements
          you should stop taking, or continue taking.</Text>

          <Text style={styles.text1}>- What time to arrive for your admission, and where to report.</Text>

          <Text style={styles.text1}>- The expected duration of your procedure and stay.</Text>

          <Text style={styles.text1}>- If and when you need to stop eating and/or drinking.</Text>

          <Text style={styles.text1}>- What arrangements you need to make for your return home ( e.g. raised toilet seat, crutches etc).</Text>

          <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.header1}>Hospital payment arrangements</Text>

          <Text style={styles.textBold}>If your treatment is covered by insurance:</Text>

          <Text style={styles.text1}>Please bring confirmation of your prior approval to the
            hospital. It is important that you understand what your
            insurer will pay for. Some policies will require co-payment
            or an excess. Please note we would not usually submit your
            insurance claims for you.</Text>

          <Text style={styles.textBold}>If your treatment is through an insurance affiliated provider scheme:</Text>

          <Text style={styles.text1}>You should receive information about any potential co-
          payments required before you come into the hospital. If you
          are unsure about what you might have to pay, please contact
          your insurance provider directly.</Text>

          <Text style={styles.textBold}>If your treatment is covered by ACC:</Text>

          <Text style={styles.text1}>The hospital will seek approval for your procedure on your
          behalf. If your procedure is only partially funded by ACC, you
          may be required to pay a deposit on admission.</Text>

          <Text style={styles.textBold}>If you are paying for all of the costs directly:</Text>

          <Text style={styles.text1}>You may need to pay the estimated cost of your hospital
          account on or before admission. We accept pre-cleared credit
          cards on the day of admission. Alternatively, you may pay
          by direct credit to our nominated bank account 5 days prior
          to admission. The balance of your hospital account must be
          settled on discharge.</Text>

          <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.header1}>Payment questions</Text>
          
          <Text style={styles.text1}>Please contact our accounts team if you
            have any questions relating to payment
            arrangements, including if you would like
            a price indication.</Text>
          
          <Text style={styles.text1}>Please note each medical practitioner
          (including your surgeon, your anaesthetist,
          your GP, and others such as physiotherapists)
          are independent of Franklin Hospital and
          will have a separate account for you or your
          insurer. You may wish to seek price indications
          from each practitioner.</Text>

          <Text style={styles.header1}>Please make arrangements for someone to:</Text>

          <Text style={styles.text1}>Drive you home (to ensure the safety of others and yourself, NZ Law prohibits driving following
          anesthesia or after taking other medications known to impair a persons ability to drive)</Text>

          <Text style={styles.text1}>Be with you for at least the first 24 hours following your surgery
          (if you are not staying in the hospital overnight)</Text>

          <Text style={styles.text1}>Provide assistance for you at home during your recovery.</Text>

          <Text style={styles.text1}>We are very happy for parents and carers to stay with their children whilst they are in hospital. We
          would be happy to discuss availability of space and if there are any additional charges that may be
          incurred should you want to stay overnight. We encourage you to visit the hospital with your child
          before admission, to meet staff and understand what will happen on the day of surgery.</Text>

          <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.header1}>Things we need you to bring to hospital with you</Text>

          <Text style={styles.text1}>- Any documentation (including test results, ×-rays, scans, letters, note, or medication
          cards) relevant to your procedure.</Text>

          <Text style={styles.text1}>- Any medicines, remedies and supplements in their original containers (we don't accept
          blister packs) and a printout from your GP or pharmacy that includes dosage and how
          often you take them.
          </Text>

          <Text style={styles.text1}>- Your 'prior approval' letter from your insurer or ACC, addressed to Franklin Hospital.</Text>

          <Text style={styles.text1}>- Your admission pack (including this information sheet).</Text>

          <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.header1}>Staying overnight or longer</Text>

          <Text style={styles.text1}>- Comfortable sleepwear, dressing
            gown, shoes (slip-ons are not safe) and
            personal toiletries.</Text>

          <Text style={styles.text1}>- Any personal aids such as glasses,
            hearing aids and dentures.
            </Text>
          
          <Text style={styles.header1}>Staying for the day only</Text>

          <Text style={styles.text1}>- Reading material or other activity.</Text>

          <Text style={styles.text1}>- Comfortable clothing (sleep wear
            is not required).</Text>

            <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.header1}>Our staff</Text>

          <Text style={styles.text1}>Whilst you are in hospital
          you and your family/
          whanau will need to
          interact with many
          members of staff in similar
          uniforms. It is easy to lose
          track of who is who and
          what their roles are, during
          this stressful time.</Text>

          <Text style={styles.text1}>Our expectation is our
            staff will introduce
            themselves to you and
            explain what they will be
            helping you with, when
            you meet them.</Text>

          <Text style={styles.text1}>We also understand that
            some of the words we use
            may be new to you please
            feel confident to ask staff
            to clarify what they mean.</Text>

            <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.header1}>Do not bring to the hospital</Text>

          <Text style={styles.text1}>- Your car, as it is highly unlikely you will be able to drive it home after your procedure.</Text>

          <Text style={styles.text1}>- Items of value.</Text>

          <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.text1}>We recommend you bring a favourite activity/toy and any special items that your child
            might want to be with them when they are scared or unwell. If you bring younger siblings
            to the hospital please ensure you have items that will keep them occupied with you. If
            possible please arrange for another adult to be present to supervise them.</Text>

            <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.header1}>A checklist for immediately before admission</Text>

          <Text style={styles.text1}>- I have followed the instructions of my surgeon and anesthetist regarding eating
          (including gum and sweets), drinking and taking medicines, remedies or supplements.
          </Text>

          <Text style={styles.text1}>- I will notify the hospital as soon as possible if something happens that might delay my
          arrival at the hospital.</Text>

          <Text style={styles.text1}>- I have showered and washed my hair, removed any nail polish, make-up or jewellery, and
          put on a clean set of clothes.
          </Text>

          <Text style={styles.text1}>- I am well (no colds, cough, diarrhoea, vomiting). I do not have any cuts, scrapes or
          wounds and I have no current infections.</Text>

          <View style={styles.header}>
        <Text style={styles.headerText}> 2 | While you are at Franklin Hospital</Text>
        </View>

          <Text style={styles.text1}>On arrival please report to the hospital main
            reception on level 1 to begin admission and
            confirm payment arrangements. You will then be
            escorted to the admission unit, where a nurse will
            review your admission paperwork and prepare you
            for your procedure. A member of your family can
            remain with you. You may discuss any questions,
            concerns and personal needs during this time.
            Please let the nurse know if you require any
            additional cultural, spiritual or emotional support.
            The team at the hospital, including your surgeon
            and anaesthetist will plan your care with you.</Text>

          <Text style={styles.text1}>Your medical care while you are in the hospital is
            the responsibility of your surgeon, while your
            nursing care will be provided by our team of
            nurses. Franklin Hospital does have the service
            of a local doctor within the hospital, however we
            expect your surgeon to maintain contact with you
            during your stay. This may be via virtual or actual
            visits. Should the need arise, we also expect your
            surgeon to be available by telephone or to attend
            the hospital to provide further prompt specialist
            assessment or additional medical treatment. In
            the case of a medical emergency, we will call
            your surgeon and you may be transferred to an
            emergency, coronary or intensive care service.</Text>

          <Text style={styles.text1}>Section 29 medication - These are medications that your
            surgical team may wish to prescribe for you that have not been
            submitted for Medsafe approval, but are used safely in other
            countries. We are required to provide Medsafe with both yours
            and the prescribers name.</Text>

          <Text style={styles.text1}>We have dedicated areas for patients staying overnight and
            those who are day stay patients. These areas are designed to be
            comfortable and meet your needs.</Text>

          <Text style={styles.text1}>Facilities for patients who stay overnight include an ensuite
            bathroom, WiFi, smart TV in an individual or shared room.
            Please note, our meals have been designed by a chef and
            reviewed by a dietician to ensure they are appetising, nourishing
            and meet your specified dietary requirements.</Text>

            <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.text1}>We encourage a parent or carer to be with their
            child as the anaesthetic is started. Please discuss
            this with your anaesthetist and surgeon. This can be
            a stressful time for parents, we will ensure there is
            a member of staff to support you. If you feel unable
            to do so, a nurse will stay with your child during this
            time. We reunite parents or carers with children as
            soon as is practicable after procedures.</Text>

            <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

          <Text style={styles.header1}>Safe care, privacy and your rights</Text>

          <Text style={styles.text1}>During your stay at the hospital you will be
            asked your name and date of birth several times,
            this is to ensure your safety. This starts when
            you arrive at reception, with your admitting
            nurse, and continues when you are transferred
            to the procedure room or operating theatre.
            Your surgeon, anaesthetist and nurses will also
            take a short 'time out' to complete a final check
            immediately before your procedure begins.</Text>

          <Text style={styles.text1}>To ensure a physically safe environment for
            all patients and health practitioners, we have
            eliminated all possible manual lifting by using
            mechanical aids as well as safe positioning and
            holding methods.</Text>

          <Text style={styles.text1}>The Patient Health Questionnaire includes questions relating to
          your physical status to help us plan your care.</Text>

          <Text style={styles.text1}>Franklin Hospital is smoke-free in accordance with the Smoke-free
          Environments Act.</Text>

          <Text style={styles.text1}>
            We at Franklin Hospital are committed to delivering your care
            in accordance with the Code of Health and Disability Services
            Consumers' Rights.</Text>

          <Text style={styles.text1}>Your privacy is important to us. Please review the privacy
          statement at the bottom of the Forms to fill out sheet included in
          this information pack.</Text>

          <Text style={styles.text1}>www.smokefree.org.nz</Text>

          <Text style={styles.text1}>www.hdc.org.nz</Text>

          <View style={styles.header}>
        <Text style={styles.headerText}> 3 | Preparing to go home</Text>
        </View>

        <Text style={styles.text1}>
            Your surgeon and nurses will discuss with you
            arrangements for your discharge home. If you have
            any concerns regarding your discharge or you
            require assistance, please raise it with them as
            soon as the subject is broached.</Text>

        <Text style={styles.text1}>If you have stayed overnight or longer, discharge time is by
          10am. Please discuss with staff if this causes you a problem
          Charges may apply if you decide to extend your stay after your
          surgeon has discharged you.</Text>

          <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

        <Text style={styles.header1}>A checklist for preparing to go home</Text>

        <Text style={styles.text1}>I have arranged for someone to drive me home.</Text>

        <Text style={styles.text1}>I have arranged for someone to stay with me at home for at least the first 24 hours.</Text>

        <Text style={styles.text1}>I have received my Hospital discharge summary, including instructions from my surgeon and the
          contact details of my surgeon.</Text>

        <Text style={styles.text1}>I understand my recovery plan and the steps I need to take to reduce my risk of blood clots.
          I know how to arrange any follow up rehabilitation support e.g. physiotherapy.</Text>

        <Text style={styles.text1}>I have received any prescriptions required for my recovery, and any medications, remedies or
          supplements I brought with me.</Text>

        <Text style={styles.text1}>I have made follow-up arrangements with my surgeon, as necessary.</Text>

        <Text style={styles.text1}>I have collected my X-rays and/or scans (CT, ultrasound, MRI).</Text>

        <Text style={styles.text1}>I have arranged for any necessary rehabilitation aids (eg, crutches).</Text>

        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

        <Text style={styles.header1}>Please note</Text>

        <Text style={styles.text1}>At the time of your discharge, your nurse will
          provide you with additional discharge information,
          and will help you to complete any appropriate
          postoperative paperwork.</Text>

        <Text style={styles.header1}>Paying your account</Text>

        <Text style={styles.text1}>Depending on who is funding your treatment, you may be
          required to settle outstanding accounts or make co-payments
          prior to leaving the hospital. If your treatment is covered by
          insurance, you will need to forward all final costs to your
          insurer (this will be broken down into separate accounts from
          the hospital, your surgeon and your anaesthetist).</Text>

          <View style={styles.header}>
        <Text style={styles.headerText}> 4 | After you leave Franklin Hospital</Text>
        </View>

        <Text style={styles.text1}>Call or visit your surgeon; GP or accident/emergency service immediately if you
          become unwellafter you leave the hospital and/or develop any of the following
          signs or symptoms:</Text>

        <Text style={styles.text1}>• Sudden shortness of breath and/or pain in your chest</Text>

        <Text style={styles.text1}>• Nausea or vomiting</Text>

        <Text style={styles.text1}>• Coughing up blood-streaked mucus</Text>

        <Text style={styles.text1}>Pain in your pelvis</Text>

        <Text style={styles.text1}>• Raised temperature (fever) or chills</Text>

        <Text style={styles.text1}>• Excessive bleeding or wound ooze</Text>

        <Text style={styles.text1}>• Increased pain, redness or swelling in or around the wound</Text>

        <Text style={styles.text1}> •Redness, pain, swelling or tenderness in your leg</Text>

        <Text style={styles.text1}>• Any other signs, symptoms or issues that are of
          concern to you or your family/whanau.</Text>

        <Text style={styles.textBold}>If in doubt, or in the event of an emergency, call an ambulance immediately (111).</Text>

        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.spacer}></View>
          </View>

        <Text style={styles.header1}>Feedback</Text>      

        <Text style={styles.text1}>Staff at Franklin Hospital welcome all feedback. This helps us to improve our service and also confirms the
           we do well. We would appreciate you providing us with your feedback.</Text>

        <Text style={styles.text1}>A feedback form can be left at the hospital reception, posted back to us in a pre-paid envelope or you can
          provide your feedback to us online. You are welcome to contact the Chief Executive Officer at any time
          contact details are provided on the Franklin Hospital website.</Text>

        <Text style={styles.textBold}>www.franklinhospital.co.nz</Text>

        <Text style={styles.textBold}>Thank you for choosing to come to Franklin Hospital.</Text>

        <Text style={styles.header1}>Your experience is our pride.</Text>


      </ScrollView>

      </View>
  )
}

export default WhatYouNeedToDo

const styles = StyleSheet.create({
screen:{
    flex: 1,
  },
  scroll:{
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  text1:{
    fontSize: 18,
  padding: 10,
  fontWeight: '400',
  color: 'black',
  },
  textBold:{
    fontSize: 18,
  padding: 10,
  fontWeight: '400',
  color: 'black',
  fontWeight: '600',
  },
  banner:{
    width: '100%',
    backgroundColor: '#33838c',
    height: 125,
    justifyContent: 'center',
    borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
  },
  bannerText:{
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    padding: 20,
  },
  header:{
    backgroundColor: '#e8f7f4',
    width: '90%',
    justifyContent: 'center',
    borderBottomRightRadius: 30,
  },
  headerText:{
    fontSize: 20,
    fontWeight: '700',
    padding: 10,
    color: '#54b3af',
  },
  header1:{
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    color: '#115367',
  },
  spacer:{
    width: '80%%',
    height: 1, 
    backgroundColor: 'black',
    
  },
})