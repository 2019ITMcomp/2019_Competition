
import React, {Component} from "react";
import {View,Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView} from "react-native";





const{height,width} = Dimensions.get("window");

export default class Mainpage extends Component{
    state = {
      trial : true,
      isOntf : true,
    };
    
    render(){
      const { isOntf } = this.state;
      
        return(
          
        <View style={styles.container}>        
        <View style={styles.container}>
          
           <View style={styles.titlecontainer}>
                <Text style={styles.title}>앱 정보</Text>
           <TouchableOpacity onPress = {() => this.props.navigation.navigate("Mypagemain")}>
          <Image source = {require('./x_button.png')} style = {styles.image}/>
       </TouchableOpacity>
       </View>

       <View>
           <Text style={styles.rules}>이용 약관 및 이용 규칙</Text>
           <View style={styles.textbox}>
               <ScrollView> 
               <Text>
                   1. 개인정보 처리방침{"\n"}
                   개인정보 처리방침은 회사가 서비스를 제공함에 있어, 개인정보를 어떻게 수집·이용·보관·파기하는지에 대한 정보를 담은 방침을 의미합니다. 개인정보 처리방침은 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 국내 개인정보 보호 법령을 모두 준수하고 있습니다. 이 약관의 정의는 서비스 이용약관을 따릅니다.{"\n"}{"\n"}

                  2. 수집하는 개인정보의 항목{"\n"}
                      회사는 서비스 제공을 위해 아래 항목 중 최소한의 개인정보를 수집합니다.{"\n"}{"\n"}

                      2.1 회원가입을 할 경우{"\n"}
                          학교, 이메일, 이름, 계좌번호, 광고성 정보 수신 동의 여부{"\n"}{"\n"}
                      
                      2.2 학교인증을 할 경우{"\n"}
                          학교 이메일{"\n"}{"\n"}
                      
                      ※ 각 항목 또는 추가적으로 수집이 필요한 개인정보 및 개인정보를 포함한 자료는 이용자 응대 과정과 서비스 내부 알림 수단 등을 통해 별도로 요청·수집될 수 있습니다.{"\n"}
                      ※ 서비스 이용 과정에서 기기 정보, 이용 기록, 로그 기록이 자동으로 수집될 수 있습니다. {"\n"}{"\n"}
                      3. 수집한 개인정보의 이용{"\n"}
                      회사는 쾌적한 서비스를 제공하기 위해, 아래의 목적에 한해 개인정보를 이용합니다.{"\n"}
                      가입 및 탈퇴 의사 확인, 회원 식별, {"\n"}
                      서비스 제공 및 기존·신규 시스템 개발·유지·개선{"\n"}
                      인구통계학적 자료 분석을 통한 맞춤형 콘텐츠 및 광고 제공{"\n"}{"\n"}
                      
                  4. 개인정보의 제3자 제공 및 처리위탁{"\n"}
                    회사는 관련법 및 회원의 동의가 없는 한, 회원의 개인정보를 제3자에게 절대 제공하지 않습니다. 단, 회사는 보안성 높은 서비스 제공을 위하여, 신뢰도가 검증된 아래 회사에 개인정보 관련 업무 처리를 위탁할 수 있습니다. 이 경우 회사는 회원에게 위탁을 받는 자와 업무의 내용을 사전에 알리고 동의를 받습니다. 위탁을 받는 자 또는 업무의 내용이 변경될 경우에도 같습니다.{"\n"}

                      Google Firebase : 서비스 시스템 제공, 데이터 관리 및 보관, 회원 관리, 운영 시스템 지원{"\n"}{"\n"}
                      
                5. 수집한 개인정보의 보관 및 파기{"\n"}
                회사는 서비스를 제공하는 동안 개인정보 취급방침 및 관련법에 의거하여 회원의 개인정보를 지속적으로 관리 및 보관합니다. 탈퇴 등으로 인해 개인정보 수집 및 이용목적이 달성될 경우, 수집된 개인정보는 즉시 또는 아래와 같이 일정 기간 이후 파기됩니다.{"\n"}
                          가입 및 학교 인증 시 수집된 개인정보 : 탈퇴 즉시{"\n"}
                          로그기록 : 최대 3년{"\n"}

                  
                  ※ 위 항에도 불구하고 법령에 의해 개인정보를 보관할 경우, 해당 법령에서 정한 최대 기간만큼 저장합니다.{"\n"}
                  ※ 개인정보의 수집 및 이용 목적이 달성되지 않았을 경우, 개인정보 파기 요청은 처리되지 않습니다.{"\n"}
                  ※ 개인정보 파기는 복구가 불가능한 기술적 방법을 이용하므로, 파기된 개인정보를 복원 할 수 없습니다.{"\n"}
                  ※ 학교 인증 시, 위조·도용 피해를 방지하기 위해 실명, 학교 이메일을 비식별화하여 1년간 보관합니다.{"\n"}
                  ※ 부정행위 시, 제재를 위해 IP 주소 및 비식별화한 실명, 학교 이메일 최대 1년 간 보관합니다. 단 시스템 해킹, 학교 인증자료 위·변조, 계정 탈취·판매 등의 중대한 부정행위로 서비스에 피해가 발생할 수 있다고 판단될 경우, 추가 피해 방지를 위해 이를 5년 간 보관합니다.{"\n"}
                  ※ 비식별화란? 일방향 암호화 처리를 하는 과정을 말합니다. 비식별화된 정보는 복호화가 불가능하며, 누구라도 이 정보로 개인을 식별하거나 유추할 수 없습니다.{"\n"}{"\n"}

                  6. 정보주체의 권리, 의무 및 행사{"\n"}
                  회원은 언제든지 [내 정보]를 통해 자신의 개인정보를 조회하거나 수정, 삭제, 탈퇴를 할 수 있습니다.{"\n"}


                  기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.{"\n"}

                  개인분쟁조정위원회 (www.1336.or.kr / 1336){"\n"}
                  정보보호마크인증위원회 (www.eprivacy.or.kr / 02-580-0533~4){"\n"}
                  대검찰청 인터넷범죄수사센터 (icic.sppo.go.kr / 02-3480-3600){"\n"}
                  경찰청 사이버테러대응센터 (www.ctrc.go.kr / 02-392-0330){"\n"}{"\n"}

                  7. 기타{"\n"}
                  이 약관은 2019년 11월 20일에 최신화 되었습니다.</Text>
               </ScrollView>
           </View>
           </View>   
          
       
        </View>
        </View>
        
        );

    }
    
    
    
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
      },
      info : {
        color : "black",
        fontSize : 20,
        fontWeight : "900",     
        alignSelf : "center"
      },
      titlecontainer:{
        borderBottomColor:'#A9A9A9', 
        borderBottomWidth: 2,
        marginBottom:10, 
        marginHorizontal:10,
        paddingBottom:7,
        flexDirection:"row",
        // borderWidth:1,
        // borderColor: "black"
      },

      image : {        
        flex:1,
        alignSelf:"center",
        marginTop: 28,
        width : 60,
        height : 60,
        marginBottom: -10,
      },

      title : {
        color : "black",
        fontSize : 30,
        marginTop : 45,
        fontWeight : "900",
        marginBottom : 7,
        marginLeft:15,
        alignSelf : "flex-start",
        flex:1,
        marginBottom: 0
      },
      rules:{
        fontSize:20,
        marginLeft: 25,
      },
      textbox:{
        backgroundColor : "#e9e9e9",
        marginTop: 20,
        width : width-30,
        height: height - height/4,
        alignSelf: "center"
      }

});